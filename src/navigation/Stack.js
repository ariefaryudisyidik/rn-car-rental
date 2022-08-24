import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Account, CarList, Splash} from '../screens';
import MainApp from './MainApp';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{
        gestureDirection: 'horizontal-inverted',
        headerShown: false,
      }}>
      <Stack.Screen name="SlashScreen" component={Splash} />
      <Stack.Screen name="MainApp" component={MainApp} />
      <Stack.Screen name="CarListScreen" component={CarList} />
      <Stack.Screen name="AccountScreen" component={Account} />
    </Stack.Navigator>
  );
};

export default Navigation;
