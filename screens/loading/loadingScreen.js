//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {bastosBlue} from '../../styles/colors';

// create a component
const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri:
            'https://xoandelugo.org/wp-content/uploads/2016/06/bastos-e1506795229446.jpg',
        }}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: bastosBlue,
  },
  image: {
    width: 300,
    height: 500,
    resizeMode: 'stretch',
    borderWidth: 2,
    borderColor: 'gold',
  },
});

//make this component available to the app
export default LoadingScreen;
