import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
} from 'react-native';
import AuthCard from '../../components/cards/auth/AuthCard';

const LoginScreen = ({navigation}) => {
  const navigateTo = () => {
    navigation.navigate('Signup');
  };
  return (
    <ScrollView
      style={styles.scrollContainer}
      contentContainerStyle={styles.scrollContainerLayout}>
      <View style={styles.cardContainer}>
        <AuthCard
          cardTypeTitle="Login"
          title="Universidad de Bastos"></AuthCard>
      </View>
      <View style={styles.navigateButtonContainer}>
        <Button
          style={styles.navigateButton}
          onPress={navigateTo}
          title="navigate"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#add8e6',
    height: '100%',
  },
  scrollContainerLayout: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexGrow: 1,
    flex: 1,
  },
  cardContainer: {
    flex: 1,
    marginTop: '20%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  navigateButtonContainer: {
    flex: .5,
    alignItems: 'center',
    justifyContent: 'center',

  },
  navigateButton: {
    width: '100%',
  },
});

export default LoginScreen;
