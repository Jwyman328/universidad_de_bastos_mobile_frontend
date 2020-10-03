//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer, TabActions} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ArticleCenterScreen from '../screens/centers/ArticleCenterScreen';
import BookCenterScreen from '../screens/centers/BookCenterScreen';
import HomepageScreen from '../screens/auth/HomepageScreen';
import VideoCenterScreen from '../screens/centers/VideoCenterScreen';
import VideoCenterStackNavigation from './VideoCenterStackNavigation';
//import Icon from 'react-native-ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const Tab = createBottomTabNavigator();

// create a component
const MainCentersNavigation = () => {
  const HomeIcon = <FontAwesome5 size={20} name={'home'} />;
  const VideoIcon = <Entypo size={23} name={'video'} />;
  const BookIcon = <FontAwesome5 size={20} name={'book'} />;
  const ArticleIcon = <MaterialIcons size={24} name={'article'} />;

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomepageScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => HomeIcon,
        }}
      />
      <Tab.Screen
        name="Video Center"
        component={VideoCenterStackNavigation}
        options={{
          tabBarLabel: 'Video Center',
          tabBarIcon: () => VideoIcon,
        }}
      />
      <Tab.Screen
        name="Book Center"
        component={BookCenterScreen}
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
