import { useNavigation } from '@react-navigation/native';
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableHighlight} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
const xoanDeLugoImage = require('../../images/xoanDeLugoLogo.png');

const MainHeader = () => {
  const navigation = useNavigation()
  
  function navigateToHomePage(){
    navigation.navigate('Home')
  }
  return (
    <View style={styles.mainHeaderContainer}>
      <TouchableHighlight onPress={navigateToHomePage} >
          <View  style={styles.imageContainer} >
            <Image style={styles.image} source={xoanDeLugoImage} />
          </View>
      </TouchableHighlight>

    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  mainHeaderContainer: {
    height: '23%',
    minHeight: 130,
    width: '100%',
    backgroundColor: '#3483eb',
    position: 'absolute',
    top: 0,
    left: 0,
    //flex:1,
    //  justifyContent: 'center',
    //  alignItems: 'center',
  },

  imageContainer:{
    height:'100%',
    //flex:1,
    width:'100%',
    justifyContent: 'center',
    alignItems: 'center',
    //position:'relative',
    //backgroundColor:'pink',
    minHeight:100,
    paddingTop:20

  },
  image: {
    //width: 75,
    //height: 70,
    position: 'relative'
  },
});

//make this component available to the app
export default MainHeader;
