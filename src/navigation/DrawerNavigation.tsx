import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  useDrawerProgress,
} from '@react-navigation/drawer';
import React, {ReactNode} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';
import {SCREEN_NAMES} from '../constants';
import ContactScreen from '../screens/ContactScreen';
import HomeScreen from '../screens/HomeScreen';
import BottomNavigation from './BottomNavigation';

const Drawer = createDrawerNavigator();

interface CustomDrawerContentProps extends DrawerContentComponentProps {}

const CustomDrawerContent: React.FC<CustomDrawerContentProps> = ({
  navigation,
}) => {
  const menuItems = [
    {label: 'Home', screen: SCREEN_NAMES.HOME},
    {label: 'Contact', screen: SCREEN_NAMES.CONTACT},
  ];

  return (
    <DrawerContentScrollView contentContainerStyle={styles.drawerContent}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>LOGO</Text>
      </View>
      {menuItems.map((item, index) => {
        const active = navigation.getState().index === index + 1;
        return (
          <TouchableOpacity
            key={index}
            style={[styles.menuItem, active ? styles.activeMenuItem : null]}
            onPress={() => navigation.navigate(item.screen)}>
            <Text
              style={[styles.menuText, active ? styles.activeMenuText : null]}>
              {item.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </DrawerContentScrollView>
  );
};

interface AnimatedScreenWrapperProps {
  children: ReactNode;
}

const AnimatedScreenWrapper: React.FC<AnimatedScreenWrapperProps> = ({
  children,
}) => {
  const progress = useDrawerProgress();

  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(progress.value, [0, 1], [1, 0.95]);
    const translateX = interpolate(progress.value, [0, 1], [0, 50]);
    const rotate = interpolate(progress.value, [0, 1], [0, -10]);
    const rotateZ = `${rotate}deg`;

    const borderRadius = interpolate(progress.value, [0, 1], [0, 20]);
    return {
      transform: [{scale}, {translateX}, {rotateZ}],
      borderRadius,
      overflow: 'hidden',
    };
  });

  return (
    <Animated.View style={[styles.animatedContainer, animatedStyle]}>
      {children}
    </Animated.View>
  );
};

// Drawer Navigation
export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerType: 'slide',
        overlayColor: 'transparent',
        headerShown: false,
        sceneStyle: styles.sceneBgColor,
        drawerStyle: styles.drawerStyle,
      }}>
      <Drawer.Screen
        name={SCREEN_NAMES.BOTTOM_TAB}
        options={{headerShown: false}}>
        {props => (
          <AnimatedScreenWrapper>
            <BottomNavigation {...props} />
          </AnimatedScreenWrapper>
        )}
      </Drawer.Screen>
      <Drawer.Screen name={SCREEN_NAMES.HOME} options={{headerShown: false}}>
        {props => (
          <AnimatedScreenWrapper>
            <HomeScreen {...props} />
          </AnimatedScreenWrapper>
        )}
      </Drawer.Screen>
      <Drawer.Screen name={SCREEN_NAMES.CONTACT} options={{headerShown: false}}>
        {props => (
          <AnimatedScreenWrapper>
            <ContactScreen {...props} />
          </AnimatedScreenWrapper>
        )}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
}

// Styles
const styles = StyleSheet.create({
  sceneBgColor: {backgroundColor: '#2c3e50'},
  drawerStyle: {
    width: 180,
    backgroundColor: '#2c3e50',
  },
  drawerText: {
    color: '#fff',
    fontSize: 18,
  },
  animatedContainer: {
    flex: 1,
    backgroundColor: '#2c3e50',
  },
  drawerContent: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
    backgroundColor: '#2c3e50',
  },
  headerContainer: {
    marginBottom: 30,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  menuItem: {
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  activeMenuItem: {
    backgroundColor: '#e74c3c',
  },
  menuText: {
    fontSize: 18,
    color: '#fff',
  },
  activeMenuText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
