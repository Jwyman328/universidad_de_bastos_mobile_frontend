import React from 'react';
import {Text, View, TouchableHighlight, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SubmitButton = ({title, handleClick, buttonColor}) => {
  //const buttonBackgroundColor = {backgroundColor:buttonColor}
  
  return (
    <TouchableHighlight onPress={handleClick} style={createStyleSheet(buttonColor).buttonContainer}>
      <View style={createStyleSheet(buttonColor).submitButton}>
        <Text style={createStyleSheet(buttonColor).buttonTitle}>{title}</Text>
      </View>
    </TouchableHighlight>
  );
};

function createStyleSheet(backgroundColor){
  const styles = StyleSheet.create({
    buttonContainer: {
      flex:1,
      width: '100%',
      alignItems: 'center',
      //marginBottom:40,
    },
    submitButton: {
      backgroundColor: backgroundColor, 
      width: '100%',
      flex:1,
      //position: 'relative',
      alignItems: 'center',
      justifyContent: 'center',
  
      borderRadius: 10,
    },
    buttonTitle: {
      fontSize: 20,
    },
  });
  return styles
}


export default SubmitButton;
