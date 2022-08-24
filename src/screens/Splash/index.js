import React, {useEffect} from 'react';
import {StyleSheet, Image, View} from 'react-native';
import {SplashImage} from '../../assets';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainApp');
    }, 1000);
  });

  return <Image source={SplashImage} style={styles.image} />;
};

export default Splash;

const styles = StyleSheet.create({
  image: {width: '100%', height: '100%'},
});
