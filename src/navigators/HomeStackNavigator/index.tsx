import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../features/Home/screens/HomeScreen';
import DetailScreen from '../../features/Home/screens/DetailScreen';

const Stack = createNativeStackNavigator();

const options = {headerShown: false};

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={options}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
