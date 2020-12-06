import React from 'react';

import {StyleSheet} from 'react-native';
import { teal } from '../../../styles/colors';

const authCardStyles = StyleSheet.create({
    container: {
      backgroundColor: teal,
      width: '80%',
      flex: 1,
      borderWidth: 1,
      borderColor: 'black',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      position: 'relative',
      padding: '5%',
      minHeight:550,
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


    },
    userInput: {
      color: 'white',
      width: '100%',
      minWidth: 200,
      //backgroundColor: 'white',
      flex: 1,
      minHeight:45,
      // minHeight: 10,
      // maxHeight: 35,
      marginTop: '5%',
      paddingLeft: 5,
      borderBottomColor:'white',
      borderBottomWidth:1,
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