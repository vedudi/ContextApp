import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {TaskContext} from '../context/TaskContext';
import Loader from '../components/Loader';
import Error from '../components/Error';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const TaskScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {userId} = route.params;
  const {
    tasks,
    loading,
    error,
    removeTask,
    addTask,
    newTaskTitle,
    setNewTaskTitle,
  } = useContext(TaskContext);
  const handleTask = () => {
    addTask(newTaskTitle);
    setNewTaskTitle('');
  };
  return (
    <View style={{flex: 1}}>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        <>
          <FlatList
            data={tasks}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <View style={styles.item}>
                <Text style={styles.title}>
                  {' '}
                  {item.title.length > 20
                    ? item.title.slice(0, 30) + '...'
                    : item.title}{' '}
                </Text>
                <Button title="Remove" onPress={() => removeTask(item.id)} />
              </View>
            )}
          />
          <View style={styles.inputContainer}>
            <TextInput
              value={newTaskTitle}
              placeholder="New Task Title"
              style={styles.input}
              onChangeText={setNewTaskTitle}
            />
            <Button title="Add Task" onPress={handleTask} />
          </View>
        </>
      )}
    </View>
  );
};

export default TaskScreen;

const styles = StyleSheet.create({
  item: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#2F3645',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 3, height: 2},
    shadowOpacity: 0.4,
  },
  title: {
    color: 'white',
    fontSize: 16,
  },
  input: {
    backgroundColor: '#fff',
    height: 40,
    borderWidth: 1,
    width: '75%',
    padding: 5,
    borderRadius: 5,
  },
  inputContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
  },
});
