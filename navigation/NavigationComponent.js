import React, {useState} from 'react';
import LoginScreen from '../screens/auth/LoginScreen';
import 'react-native-gesture-handler';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignUpScreen from '../screens/auth/SignUpScreen';
//import HomepageScreen from '../screens/auth/HomepageScreen';
import MainCentersNavigation from './MainCentersNavigation';

const Stack = createStackNavigator();

const NavigationComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{title: 'Login'}}
        />
        <Stack.Screen name="Signup" component={SignUpScreen} options={{}} />
        <Stack.Screen
          name="Home"
          component={MainCentersNavigation}
          options={{title: 'Universidad de Bastos'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationComponent;
