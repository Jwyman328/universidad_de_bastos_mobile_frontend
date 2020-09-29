import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text} from 'react-native';
import SignupCard from '../../components/cards/auth/SignupCard';
import authScreenStyles from './styles/authScreenStyles';


const SignUpScreen = ({navigation}) => {
    return (
        <ScrollView
          style={authScreenStyles.scrollContainer}
          contentContainerStyle={authScreenStyles.scrollContainerLayout}>
          <View style={authScreenStyles.cardContainer}>
            <SignupCard>
            </SignupCard>
          </View>
    
        </ScrollView>
      );
    };
    
export default SignUpScreen;
