import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {HamburgerIcon} from '../assets/svgs';
import {DrawerActions, useNavigation} from '@react-navigation/native';

const Header: React.FC<{title: string}> = ({title}) => {
  const navigation = useNavigation();
  const onMenuPress = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={onMenuPress}
        style={styles.menuButton}>
        <HamburgerIcon />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 60,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuButton: {
    position: 'absolute',
    left: 15,
    top: 15,
  },
  headerTitle: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Header;
