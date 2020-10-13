import {useNavigation} from '@react-navigation/native';
//import liraries
import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-ionicons';
import {primaryBlue} from '../../styles/colors';

// create a component
const CenterSortHeader = ({iconName, routeScreen, title}) => {
  const screenWidth = Dimensions.get('screen').width;
  const screenHeight = Dimensions.get('window').height;
  const styles = createStyles(screenHeight, screenWidth);

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const navigation = useNavigation();
  function openSortPage() {
    navigation.navigate(routeScreen);
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>

      <TouchableOpacity style={styles.touchContinaer} onPress={openSortPage}>
        <View style={styles.iconContainer}>
          <Icon style={styles.icon} size={40} name={iconName} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
function createStyles(height, width) {
  const styles = StyleSheet.create({
    container: {
      height: height * 0.11,
      width: width,
      flexDirection:'row',
      justifyContent:'flex-start',
      alignItems: 'center',
      backgroundColor: '#3483eb',
      padding: 30,
    },
    touchContinaer: {
      top:0,
      right: 10,
      height: height * 0.1,
      width: '90%',
      position:'absolute'
    },
    iconContainer: {
      height: '100%',
      width: '100%',
    },
    icon: {
      position: 'absolute',
      right: 0,
      bottom: 10,
    },
    titleContainer:{
      width:"100%",
      alignItems:'center',
      justifyContent:'center',
      height:height * 0.11
    },
    title: {
      color: 'white',
      fontSize: 20,
    },
  });

  return styles;
}

//make this component available to the app
export default CenterSortHeader;
