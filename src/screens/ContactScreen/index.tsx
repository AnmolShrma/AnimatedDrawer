import React from 'react';
import {StyleSheet, View} from 'react-native';
import Header from '../../components/Header';
import {SCREEN_NAMES} from '../../constants';

const ContactScreen: React.FC = () => {
  return (
    <View style={styles.bgColor}>
      <Header title={SCREEN_NAMES.CONTACT} />
    </View>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({
  bgColor: {
    flex: 1,
    backgroundColor: '#4DB6AC',
  },
});
