//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { hasReadYellow } from '../../styles/colors';

// create a component
const SelectOptionButton = ({option, isSelected, setIsSelected}) => {
    console.log(isSelected)
  const styles = createStyles(isSelected)
 
  function setSelected(){
    setIsSelected(option)
 }
  return (
    <TouchableOpacity onPress={setSelected}>
      <View style={styles.selectButton}>
        <Text>{option}</Text>
      </View>
    </TouchableOpacity>
  );
};

// define your styles
function createStyles(isSelected){
    const backgroundColor = isSelected? hasReadYellow : 'white'
    const styles = StyleSheet.create({
        selectButton: {
          backgroundColor: backgroundColor,
          borderStyle: 'solid',
          borderWidth: .5,
          borderColor: 'black',
          height: 50,
          width: 90,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 3,
        },
      });

      return styles
}


//make this component available to the app
export default SelectOptionButton;