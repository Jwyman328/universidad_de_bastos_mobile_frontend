import React, { useState } from 'react';
import LoginScreen from './screens/auth/LoginScreen';
import 'react-native-gesture-handler';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignUpScreen from './screens/auth/SignUpScreen';
import HomepageScreen from './screens/auth/HomepageScreen';

const Stack = createStackNavigator();

const NavigationComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Login" component={LoginScreen} options={{}} />
        <Stack.Screen name="Signup" component={SignUpScreen} options={{}} />
        <Stack.Screen name="Home" component={HomepageScreen} options={{}} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};

export default NavigationComponent;
