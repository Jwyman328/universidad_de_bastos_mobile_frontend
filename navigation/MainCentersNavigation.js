//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer, TabActions} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ArticleCenterScreen from '../screens/centers/ArticleCenterScreen';
import HomepageScreen from '../screens/auth/HomepageScreen';
import VideoCenterScreen from '../screens/centers/videoCenter/VideoCenterScreen';
import VideoCenterStackNavigation from './videoCenterNavigation/VideoCenterStackNavigation';
import Icon from 'react-native-ionicons'
import VideoCenterSortDrawerNavigation from './videoCenterNavigation/VideoCenterSortDrawerNavigation';
import BookCenterSortDrawerNavigation from './bookCenterNavigation/BookCenterSortDrawerNavigation';


const Tab = createBottomTabNavigator();

// create a component
const MainCentersNavigation = () => {
  const HomeIcon = <Icon size={20} name={'home'} />;
  const VideoIcon = <Icon size={23} name={'videocam'} />;
  const BookIcon = <Icon size={20} name={'book'} />;
  const ArticleIcon = <Icon size={24} name={'document'} />;

  return (
    <Tab.Navigator>
      {/* <Tab.Screen
        name="Home"
        component={HomepageScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => HomeIcon,
        }}
      /> */}
      <Tab.Screen
        name="Video Center"
        component={VideoCenterSortDrawerNavigation}  //VideoCenterStackNavigation
        options={{
          tabBarLabel: 'Video Center',
          tabBarIcon: () => VideoIcon,
        }}
      />
      <Tab.Screen
        name="Book Center"
        component={BookCenterSortDrawerNavigation}
        options={{
          tabBarLabel: 'Book Center',
          tabBarIcon: () => BookIcon,
        }}
      />
      <Tab.Screen name="Article Center" component={ArticleCenterScreen}
       options={{
        tabBarLabel: 'Article Center',
        tabBarIcon: () => ArticleIcon,
      }} />
    </Tab.Navigator>
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
export default MainCentersNavigation;
