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
import { primaryBlue } from '../../styles/colors';


// create a component
const CenterSortHeader = () => {
  const screenWidth = Dimensions.get('screen').width;
  const screenHeight = Dimensions.get('window').height;
  const styles = createStyles(screenHeight, screenWidth);

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const navigation = useNavigation();
  function openSortPage() {
    navigation.navigate('VideoCenterSortSettings');
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchContinaer} onPress={openSortPage}>
        <View style={styles.iconContainer}>
          <Icon size={40} name={'cog'} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
function createStyles(height, width) {
  const styles = StyleSheet.create({
    container: {
      height: height * 0.1,
      width: width,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#3483eb',
      padding: 30,
    },
    iconContainer: {
      position: 'absolute',
      top: 0,
      //backgroundColor: 'red',
      right: 0,
      // width: 20,
      // height:20
    },
    touchContinaer: {
      flex: 1,
      width: '100%',
    },
  });

  return styles;
}

//make this component available to the app
export default CenterSortHeader;
