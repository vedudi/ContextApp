import {Alert, StyleSheet} from 'react-native';
import React, {createContext, useEffect, useState} from 'react';
import axios from 'axios';

export const TaskContext = createContext();

const TaskProvider = ({children}) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
        setTasks(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);
  const removeTask = id => {
    const filtred = tasks.filter(task => task.id !== id);
    setTasks(filtred);
    Alert.alert("Task silindi")
  };
  const addTask=title=>{
const newTask={
  userId:1,
  id:tasks.length+1,
  title,
}
setTasks([...tasks,newTask])
Alert.alert("Yeni Task Eklendi")
  }
  return (
    <TaskContext.Provider
      value={{tasks, loading, error, removeTask, addTask,newTaskTitle,setNewTaskTitle}}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;

const styles = StyleSheet.create({});
