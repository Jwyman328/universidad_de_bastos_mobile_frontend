import React from 'react';

import {StyleSheet} from 'react-native';

const authCardStyles = StyleSheet.create({
    container: {
      backgroundColor: '#1339c2',
      width: '80%',
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
      marginBottom:'2%',
      

      //backgroundColor: 'pink',
      textAlign: 'center',
    },
    cardTypeTitleContainer: {
      flex: 1,
      width: '100%',
      //backgroundColor: 'black',
      justifyContent: 'center',
      maxHeight:50,

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
      flex: 1,
      minHeight:30,
      // minHeight: 10,
      // maxHeight: 35,
      marginTop: '5%',
      paddingLeft: 5,
    },
    submitButtonContainer: {
      flex: 1.5,
      width: '100%',
      justifyContent:'space-between',
      alignItems:'center',
      marginTop: 40,
    },
    buttonSeparatorTextContainer:{
      flex:1,
      width: '100%',
      flexDirection:'column',
      alignItems:"center",
      justifyContent:'center',
    },
    buttonSeparatorText: {
      fontSize: 20,
      color: 'white',
    },
  });

export default authCardStyles;