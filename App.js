import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import LoginScreen from './screens/auth/LoginScreen';
import 'react-native-gesture-handler';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignUpScreen from './screens/auth/SignUpScreen';
import HomepageScreen from './screens/auth/HomepageScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{}} />
        <Stack.Screen name="Signup" component={SignUpScreen} options={{}} />
        <Stack.Screen name="Home" component={HomepageScreen} options={{}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
