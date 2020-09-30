import React from 'react';

import {StyleSheet} from 'react-native';

const authCardStyles = StyleSheet.create({
    container: {
      backgroundColor: '#1339c2',
      width: '70%',
      flex: 1,
      borderWidth: 2,
      borderColor: 'black',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      position: 'relative',
      padding: '5%',
      //paddingBottom: 50,
    },
    title: {
      fontSize: 30,
      color: 'white',
      textAlign: 'center',
      fontFamily: 'Palatino-Bold',
      flex: 1,
      //backgroundColor: 'pink',
      textAlign: 'center',
    },
    cardTypeTitleContainer: {
      flex: 1,
      width: '100%',
      //backgroundColor: 'black',
      justifyContent: 'center',
    },
    cardTypeTitle: {
      fontSize: 20,
      color: 'white',
      textAlign: 'center',
      fontFamily: 'Palatino-Bold',
      width: '100%',
      alignSelf: 'center',
      position: 'relative',
    },
    userInputContainer: {
      width: '100%',
      position: 'relative',
      //height: '30%',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      //backgroundColor: 'purple',
    },
    userInput: {
      color: 'black',
      width: '100%',
      minWidth: 200,
      backgroundColor: 'white',
      height: 25,
      minHeight: 10,
      maxHeight: 35,
      marginTop: 20,
      paddingLeft: 5,
    },
    submitButtonContainer: {
      flex: 1.5,
      //backgroundColor: 'green',
      width: '100%',
      //justifyContent:'flex-end',
      alignItems: 'flex-end',
      marginTop: 40,
    },
    buttonSeparatorText: {
      textAlign: 'center',
      width: '100%',
      marginBottom: 7,
      fontSize: 20,
      color: 'white',
    },
  });

export default authCardStyles;