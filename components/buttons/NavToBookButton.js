//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import Icon from 'react-native-ionicons'

// create a component
const NavToBook = () => {
  function goToBook() {
    console.log('nav');
  }
  return (
    <View style={{flex: 1}} onStartShouldSetResponder={(event) => true}>
      <TouchableOpacity style={styles.touchContainer}>
        <View style={styles.container}>
          <Icon
            size={43}
            name="arrow-forward"
            backgroundColor="#3b5998"
            onPress={goToBook}></Icon>
        </View>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  touchContainer: {
    height: 50,
    justifyContent: 'center',
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
