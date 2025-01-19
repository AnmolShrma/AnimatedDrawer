import React from 'react';
import {StyleSheet, View} from 'react-native';
import Header from '../../components/Header';
import {SCREEN_NAMES} from '../../constants';

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.bgColor}>
      <Header title={SCREEN_NAMES.HOME} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  bgColor: {
    flex: 1,
    backgroundColor: '#9575CD',
  },
});
