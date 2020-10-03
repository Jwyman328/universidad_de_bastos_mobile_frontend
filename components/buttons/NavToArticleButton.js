//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

// create a component
const NavToArticleButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.buttonContainer}>
        <Text style={styles.title}>Read</Text>
      </View>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: .3,
    width:'100%',
    justifyContent: 'center',
    alignItems: 'center',

  },
  buttonContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    width:'60%',
    backgroundColor: '#ccd1eb',
    height:'90%',
    borderRadius:15
  },
  title: {
      fontSize: 20,
  }
});

//make this component available to the app
export default NavToArticleButton;
