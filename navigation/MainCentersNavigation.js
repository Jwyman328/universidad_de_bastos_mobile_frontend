//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomepageScreen from '../screens/auth/HomepageScreen';

import Icon from 'react-native-ionicons';
import VideoCenterSortDrawerNavigation from './videoCenterNavigation/VideoCenterSortDrawerNavigation';
import BookCenterSortDrawerNavigation from './bookCenterNavigation/BookCenterSortDrawerNavigation';
import ArticleCenterSortDrawerNavigation from './articleCenterNavigation/ArticleCenterSortDrawerNavitation';
import UserProfileScreen from '../screens/profile/UserProfileScreen';

const Tab = createBottomTabNavigator();

// create a component
const MainCentersNavigation = () => {
  const ProfileIcon = <Icon size={25} name={'person'} />;
  const VideoIcon = <Icon size={23} name={'videocam'} />;
  const BookIcon = <Icon size={20} name={'book'} />;
  const ArticleIcon = <Icon size={24} name={'document'} />;

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Book Center"
        component={BookCenterSortDrawerNavigation}
        options={{
          tabBarLabel: 'Libros',
          tabBarIcon: () => BookIcon,
        }}
      />
      <Tab.Screen
        name="Video Center"
        component={VideoCenterSortDrawerNavigation} //VideoCenterStackNavigation
        options={{
          tabBarLabel: 'Videos',
          tabBarIcon: () => VideoIcon,
        }}
      />

      <Tab.Screen
        name="Article Center"
        component={ArticleCenterSortDrawerNavigation}
        options={{
          tabBarLabel: 'Artículos',
          tabBarIcon: () => ArticleIcon,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={UserProfileScreen}
        options={{
          tabBarLabel: 'Usuario',
          tabBarIcon: () => ProfileIcon,
        }}
      />
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
