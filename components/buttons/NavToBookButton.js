//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/Entypo';

// create a component
const NavToBook = () => {
  function goToBook() {
    console.log('nav');
  }
  return (
    <TouchableOpacity style={styles.touchContainer} >
      <View style={styles.container}>
        <Icon
          size={40}
          name="arrow-right"
          backgroundColor="#3b5998"
          onPress={goToBook}></Icon>
      </View>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
    touchContainer:{
        height:50,
        justifyContent: "center",
    },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default NavToBook;
