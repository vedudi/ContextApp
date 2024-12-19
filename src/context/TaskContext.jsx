import {StyleSheet} from 'react-native';
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

  return (
    <TaskContext.Provider value={{tasks, loading, newTaskTitle, error}}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;

const styles = StyleSheet.create({});
