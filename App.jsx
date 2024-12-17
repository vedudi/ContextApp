import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/navigation/Routes';
import UserProvider from './src/context/UserContext';

const App = () => {
  return (
    <UserProvider>
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
    </UserProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
