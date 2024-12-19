import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {TaskContext} from '../context/TaskContext';
import Loader from '../components/Loader';

const TaskScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {userId} = route.params;
  const {tasks, loading, error} = useContext(TaskContext);
  return (
    <View style={{flex: 1}}>
      {loading ? (
        <Loader />
      ) : error ? (
        <Text> {error} </Text>
      ) : (
        <FlatList
          data={tasks}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View style={styles.item}>
              <Text style={styles.title}> {item.title} </Text>
              <Text style={styles.subtitle}> {item.email} </Text>
              <Button title="Remove" />
            </View>
          )}
        />
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
