import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
} from 'react-native';
import LoginCard from '../../components/cards/auth/LoginCard';
import authScreenStyles from './styles/authScreenStyles';
 


const LoginScreen = ({navigation}) => {

  return (
    <ScrollView
      style={authScreenStyles.scrollContainer}
      contentContainerStyle={authScreenStyles.scrollContainerLayout}>
      <View style={authScreenStyles.cardContainer}>
        <LoginCard></LoginCard>
      </View>

    </ScrollView>
  );
};


export default LoginScreen;
