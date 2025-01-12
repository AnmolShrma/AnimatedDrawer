import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';
import {SCREEN_NAMES} from '../constants';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false, gestureEnabled: false}}
        name={SCREEN_NAMES.SPLASH}
        component={SplashScreen}
      />
      <Stack.Screen name={SCREEN_NAMES.HOME} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
