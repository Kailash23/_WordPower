import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './app-navigator';
// import BottomTabs from './bottom-tabs';

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
      {/* <BottomTabs /> */}
    </NavigationContainer>
  );
}
