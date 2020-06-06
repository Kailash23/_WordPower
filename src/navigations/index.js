import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './app-navigator';
import LoadDatabaseScreen from '../screens/LoadDatabase';
import {exists, DocumentDirectoryPath} from 'react-native-fs';
import AppLoadingScreen from '../screens/AppLoading';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {enableScreens} from 'react-native-screens';

enableScreens();
const Stack = createNativeStackNavigator();

export default function App() {
  const [isDBExists, setDBExists] = useState(undefined);

  useEffect(() => {
    (async () => {
      try {
        const dbPath = `${DocumentDirectoryPath}/WordPowerDB`;
        setDBExists(await exists(dbPath));
      } catch (e) {
        setDBExists(false);
        console.log('App Loading Error : ', e);
      }
    })();
  }, []);

  if (isDBExists === undefined) {
    return <AppLoadingScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isDBExists ? 'AppNavigator' : 'LoadDatabase'}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="AppNavigator" component={AppNavigator} />
        <Stack.Screen name="LoadDatabase" component={LoadDatabaseScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
