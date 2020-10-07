import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import VideoCenterStackNavigation from './VideoCenterStackNavigation';
import VideoSortScreen from '../../screens/centers/videoCenter/VideoSortScreen';





const Drawer = createDrawerNavigator();

export default function VideoCenterSortDrawerNavigation() {
  return (
      <Drawer.Navigator initialRouteName="VideoCenter">
        <Drawer.Screen name="VideoCenter" component={VideoCenterStackNavigation} />
        <Drawer.Screen name="VideoCenterSortSettings" component={VideoSortScreen} />
      </Drawer.Navigator>
  );
}