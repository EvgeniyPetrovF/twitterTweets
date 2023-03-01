import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainTabNavigator from '../MainTabNavigator';
import LoginScreen from '../../features/Login/screens/LoginScreen';
import {useMMKVString} from 'react-native-mmkv';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  const [username] = useMMKVString('nickname');

  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      {username ? (
        <Stack.Screen name="Main" component={MainTabNavigator} />
      ) : (
        <Stack.Screen name="Login" component={LoginScreen} />
      )}
    </Stack.Navigator>
  );
};

export default AppStack;
