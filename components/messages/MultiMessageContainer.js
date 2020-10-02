//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

// create a component
const MultiMessageContainer = (props) => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainerStyle}>
      {props.children}
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    marginBottom: '5%',
  },
  contentContainerStyle: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
    //padding: 10,
  },
});

//make this component available to the app
export default MultiMessageContainer;
