import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ContactIcon, HomeIcon} from '../assets/svgs';
import {SCREEN_NAMES} from '../constants';
import ContactScreen from '../screens/ContactScreen';
import HomeScreen from '../screens/HomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
import UserProfileScreen from '../screens/UserProfileScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const screenOptions = ({route}: {route: {name: string}}) => ({
  tabBarLabelStyle: ({focused}: {focused: boolean}) => ({
    color: focused ? 'blue' : 'grey',
  }),
  tabBarIcon: ({focused}: {focused: boolean}) => {
    switch (route.name) {
      case SCREEN_NAMES.HOME:
        return <HomeIcon color={focused ? 'blue' : 'grey'} />;

      case SCREEN_NAMES.CONTACT:
        return <ContactIcon color={focused ? 'blue' : 'grey'} />;
    }
  },
});

// Home Stack Navigator
function HomeStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: true}}>
      <Stack.Screen
        options={{headerShown: false}}
        name={SCREEN_NAMES.HOME}
        component={HomeScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={SCREEN_NAMES.USER}
        component={UserProfileScreen}
      />
    </Stack.Navigator>
  );
}

const BottomNavigation: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName={SCREEN_NAMES.HOME}
      screenOptions={screenOptions}>
      <Tab.Screen
        options={{headerShown: false}}
        name={SCREEN_NAMES.HOME}
        component={HomeStackNavigator}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name={SCREEN_NAMES.CONTACT}
        component={ContactScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
