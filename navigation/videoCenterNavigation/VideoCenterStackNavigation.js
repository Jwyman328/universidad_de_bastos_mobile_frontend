//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import VideoCenterScreen from '../../screens/centers/videoCenter/VideoCenterScreen';
import VideoPlayerScreen from '../../screens/centers/videoCenter/VideoPlayerScreen';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

// create a component
const VideoCenterStackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="VideoCenterScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="VideoCenterScreen"
        component={VideoCenterScreen}
        options={{title: 'Video Center'}}
      />
      <Stack.Screen
        name="VideoPlayerScreen"
        component={VideoPlayerScreen}
        options={{}}
      />
    </Stack.Navigator>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default VideoCenterStackNavigation;
