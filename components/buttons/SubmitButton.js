import React from 'react';
import {Text, View, TouchableHighlight, StyleSheet} from 'react-native';

const SubmitButton = ({title, handleClick}) => {
  return (
    <TouchableHighlight onPress={handleClick} style={styles.buttonContainer}>
      <View style={styles.submitButton}>
        <Text style={styles.buttonTitle}>{title}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  submitButton: {
    backgroundColor: '#03b1fc',
    width: '60%',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    marginTop: 20,
    borderRadius: 10,
  },
  buttonTitle: {
    fontSize: 20,
  },
});

export default SubmitButton;
