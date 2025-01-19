import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {ContactIcon, HomeIcon} from '../assets/svgs';
import {SCREEN_NAMES} from '../constants';
import ContactScreen from '../screens/ContactScreen';
import HomeScreen from '../screens/HomeScreen';
import SplashScreen from '../screens/SplashScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

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

const DrawerNavigation: React.FC = () => {
  return (
    <Drawer.Navigator>
      <Stack.Screen
        options={{headerShown: false, gestureEnabled: false}}
        name={SCREEN_NAMES.BOTTOM_TAB}
        component={BottomNavigation}
      />
    </Drawer.Navigator>
  );
};

const BottomNavigation: React.FC = () => {
  //set tab icons
  return (
    <Tab.Navigator
      initialRouteName={SCREEN_NAMES.HOME}
      screenOptions={screenOptions}>
      <Tab.Screen
        options={{headerShown: false}}
        name={SCREEN_NAMES.HOME}
        component={HomeScreen}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name={SCREEN_NAMES.CONTACT}
        component={ContactScreen}
      />
    </Tab.Navigator>
  );
};

const AppNavigation: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false, gestureEnabled: false}}
        name={SCREEN_NAMES.SPLASH}
        component={SplashScreen}
      />
      <Stack.Screen
        options={{headerShown: false, gestureEnabled: false}}
        name={SCREEN_NAMES.APP}
        component={DrawerNavigation}
      />
    </Stack.Navigator>
  );
};

export default AppNavigation;
