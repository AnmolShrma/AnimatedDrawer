import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from '../../components/Header';
import {SCREEN_NAMES} from '../../constants';

const ContactScreen: React.FC = () => {
  return (
    <View>
      <Header title={SCREEN_NAMES.CONTACT} />
      <Text>Contact</Text>
    </View>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({});
