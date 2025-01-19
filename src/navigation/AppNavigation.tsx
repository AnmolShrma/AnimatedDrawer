import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {SCREEN_NAMES} from '../constants';
import SplashScreen from '../screens/SplashScreen';
import DrawerNavigation from './DrawerNavigation';

const Stack = createStackNavigator();

const AppNavigation: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false, gestureEnabled: false}}
        name={SCREEN_NAMES.SPLASH}
        component={SplashScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={SCREEN_NAMES.APP}
        component={DrawerNavigation}
      />
    </Stack.Navigator>
  );
};

export default AppNavigation;
