import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import LottieView from 'lottie-react-native';
import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {ASSET_LINKS, SCREEN_NAMES} from '../../constants';

const {width, height} = Dimensions.get('window');

const SplashScreen: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();

  return (
    <View style={styles.containerStyle}>
      <LottieView
        style={{width, height}}
        source={ASSET_LINKS.SPLASH_LOTTIE}
        onAnimationFinish={() => navigation.replace(SCREEN_NAMES.HOME)}
        autoPlay
        loop={false}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: 'rgba(0,146,245,255)',
  },
});
