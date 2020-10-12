//import liraries
import {useNavigation} from '@react-navigation/native';
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-ionicons';
import { primaryBlue } from '../../styles/colors';

// create a component
const VideoPlayerHeader = ({title}) => {
  const navigation = useNavigation();

  function navigateToVideoCenter() {
    navigation.navigate('VideoCenterScreen');
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={navigateToVideoCenter} style={styles.iconContainer}>
        <Icon  color={'white'} size={30} name="arrow-back"></Icon>
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text numberOfLines={3} style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    //flex: .3,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: primaryBlue,
    position: 'absolute',
    top: 0,
    height: '20%',
    width: '100%',
  },
  titleContainer: {
    width: '80%',
    marginLeft:'5%'
  },
  iconContainer:{
    marginLeft:15,
  },
  title:{
    color: 'white',
    fontSize:20,
  }
});

//make this component available to the app
export default VideoPlayerHeader;
