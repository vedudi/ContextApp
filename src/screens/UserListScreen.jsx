import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {UserContext} from '../context/UserContext';
import Loader from '../components/Loader';

const UserListScreen = () => {
  const {loading, error, users} = useContext(UserContext);

  return (
    <View style={{flex: 1}}>
      {loading ? (
        <Loader />
      ) : error ? (
        <Text> {error} </Text>
      ) : (
        <View>
          <Text> veri geldi</Text>
        </View>
      )}
    </View>
  );
};

export default UserListScreen;

const styles = StyleSheet.create({});
