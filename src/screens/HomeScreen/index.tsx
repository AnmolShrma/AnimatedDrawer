import React from 'react';
import {Text, View} from 'react-native';
import Header from '../../components/Header';
import {SCREEN_NAMES} from '../../constants';

const HomeScreen: React.FC = () => {
  return (
    <View>
      <Header title={SCREEN_NAMES.HOME} />
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
