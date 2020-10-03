//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ArticleCenterScreen from '../screens/centers/ArticleCenterScreen';
import BookCenterScreen from '../screens/centers/BookCenterScreen';
import HomepageScreen from '../screens/auth/HomepageScreen';
import VideoCenterScreen from '../screens/centers/VideoCenterScreen';
import VideoCenterStackNavigation from './VideoCenterStackNavigation';
//import Icon from 'react-native-ionicons'
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

// create a component
const MainCentersNavigation = () => {
    return (
            <Tab.Navigator>
                <Tab.Screen name='Home' component={HomepageScreen}
                options={{
                    tabBarLabel: 'Screen1',
                    tabBarIcon: ({ focused }) => 
                    <Icon name="rocket" size={30} color="#900" />

                  }}
                 />
                <Tab.Screen name='Video Center' component={VideoCenterStackNavigation}  />
                <Tab.Screen name='Book Center' component={BookCenterScreen} />
                <Tab.Screen name='Article Center' component={ArticleCenterScreen} />
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
