import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import UserListScreen from '../screens/UserListScreen';
import UserDetailsScreen from '../screens/UserDetailsScreen';
import TaskScreen from '../screens/TaskScreen';

const Stack = createStackNavigator();
const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="UserList" component={UserListScreen} />
      <Stack.Screen name="UserDetails" component={UserDetailsScreen} />
      <Stack.Screen name="Tasks" component={TaskScreen} />
    </Stack.Navigator>
  );
};

export default Routes;

const styles = StyleSheet.create({});
