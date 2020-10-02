import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
const xoanDeLugoImage = require('../../images/xoanDeLugoLogo.png');

const MainHeader = () => {
  return (
    <SafeAreaView style={styles.mainHeaderContainer}>
      <Image style={styles.image} source={xoanDeLugoImage} />
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  mainHeaderContainer: {
    height: '13%',
    minHeight: 100,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3483eb',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  image: {
    width: 70,
    height: '90%',
  },
});

//make this component available to the app
export default MainHeader;
