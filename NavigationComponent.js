import React, { useState } from 'react';
import LoginScreen from './screens/auth/LoginScreen';
import 'react-native-gesture-handler';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignUpScreen from './screens/auth/SignUpScreen';
import HomepageScreen from './screens/auth/HomepageScreen';
import GlobalDataContext from './data/global/globalContext';

const Stack = createStackNavigator();

const NavigationComponent = () => {
  const [token,setToken] = useState(undefined)
  return (
    <GlobalDataContext.Provider value={{token:token, setToken:setToken}}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{}} />
        <Stack.Screen name="Signup" component={SignUpScreen} options={{}} />
        <Stack.Screen name="Home" component={HomepageScreen} options={{}} />
      </Stack.Navigator>
    </NavigationContainer>
    </GlobalDataContext.Provider>

  );
};

export default NavigationComponent;
