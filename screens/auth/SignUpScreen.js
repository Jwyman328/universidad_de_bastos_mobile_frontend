import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text} from 'react-native';
import AuthCard from '../../components/cards/auth/AuthCard';


const SignUpScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <AuthCard
          cardTypeTitle="Login"
          title="Universidad de Bastos"></AuthCard>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'pink',
  },
  cardContainer: {
    width: '100%',
    height: '100%',
    marginTop: '40%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

export default SignUpScreen;
