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
import AuthCard from './components/cards/auth/AuthCard';

const App = () => {
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
    backgroundColor: '#add8e6',

  },
  cardContainer: {
    width: '100%',
    height: '100%',
    marginTop:'40%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});

export default App;
