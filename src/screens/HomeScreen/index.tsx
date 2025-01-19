import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import Header from '../../components/Header';
import {SCREEN_NAMES} from '../../constants';

const HomeScreen: React.FC = () => {
  const {navigate} = useNavigation();
  return (
    <View style={styles.bgColor}>
      <Header title={SCREEN_NAMES.HOME} />

      <Button
        title="Go to User Page"
        onPress={() => navigate(SCREEN_NAMES.USER)}
      />
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
