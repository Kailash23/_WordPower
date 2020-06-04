import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import HomeScreen from '../scenes/Home';
import SearchScreen from '../scenes/Search';

const Stack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
    </Stack.Navigator>
  );
}
