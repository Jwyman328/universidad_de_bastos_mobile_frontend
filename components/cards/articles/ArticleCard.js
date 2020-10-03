//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
const ArticleCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>ArticleCard</Text>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
    width: '80%',
    height: 300,
    borderColor: 'black',
    borderWidth: 5,
    borderStyle: 'solid',
    borderRadius: 10,
  },
  titleContainer:{
    flex:1,
    backgroundColor:'blue',
    width:'100%',
    justifyContent:'center',
    alignItems:'center'
  },
  title: {
      fontSize:18,
  },
});

//make this component available to the app
export default ArticleCard;
