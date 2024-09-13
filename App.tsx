/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomePage from './src/screens/home';
import {createStackNavigator} from '@react-navigation/stack';
import HistoryPage from './src/screens/history';
import RightButtons from './src/rightButtons';
const Stack = createStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerRight: RightButtons,
      }}>
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="History" component={HistoryPage} />
    </Stack.Navigator>
  );
}

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

export default App;
