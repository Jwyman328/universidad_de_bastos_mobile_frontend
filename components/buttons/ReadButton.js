//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {whiteBackground, hasReadYellow} from '../../styles/colors';

// create a component
const ReadButton = ({hasRead, onPressButton}) => {
  const buttonText = hasRead ? 'NO LEIDO?' : 'LEIDO?';
  let handleOnPress = () => {
    //event.stopPropagation()
    onPressButton();
  };

  const buttonColor = hasRead ? hasReadYellow : 'grey';
  const styles = createStyles(buttonColor);
  return (
    <View style={{flex: 1}} onStartShouldSetResponder={(event) => true}>
      <TouchableOpacity
        onPress={() => handleOnPress()}
        style={styles.container}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
function createStyles(buttonColor) {
  const styles = StyleSheet.create({
    container: {
      //flex: .6,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: buttonColor,
      width: 130,
      borderRadius: 15,
      borderColor: 'black',
      borderWidth: 1,
      height: 50,
    },
    buttonText: {
      fontSize: 20,
      color: 'black',
      //width: '100%',
    },
  });

  return styles;
}

//make this component available to the app
export default ReadButton;
