import React from 'react';
import {StyleSheet} from 'react-native';

const authScreenStyles =StyleSheet.create({
    scrollContainer: {
      flex: 1,
      backgroundColor: '#add8e6',
      height: '100%',
    },
    scrollContainerLayout: {
      display: 'flex',
      justifyContent: 'space-evenly',
      flexGrow: 1,
      flex: 1,
    },
    cardContainer: {
      flex: .6,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    navigateButtonContainer: {
      flex: .5,
      alignItems: 'center',
      justifyContent: 'center',
  
    },
    navigateButton: {
      width: '100%',
    },
  });

export default authScreenStyles;