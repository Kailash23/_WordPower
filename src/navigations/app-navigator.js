import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../scenes/Home';
import SearchScreen from '../scenes/Search';
import LoadDatabaseScreen from '../scenes/LoadDatabase';

const Stack = createStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="LoadDatabase" component={LoadDatabaseScreen} />
      {/* <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Search" component={SearchScreen} /> */}
    </Stack.Navigator>
  );
}
