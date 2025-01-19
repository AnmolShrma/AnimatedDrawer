import React from 'react';
import {StyleSheet, View} from 'react-native';
import Header from '../../components/Header';
import {SCREEN_NAMES} from '../../constants';

const UserProfileScreen: React.FC = () => {
  return (
    <View style={styles.bgColor}>
      <Header title={SCREEN_NAMES.USER} />
    </View>
  );
};

export default UserProfileScreen;

const styles = StyleSheet.create({
  bgColor: {
    flex: 1,
    backgroundColor: '#4DB6AC',
  },
});
