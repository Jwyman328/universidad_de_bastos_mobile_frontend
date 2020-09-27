import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text} from 'react-native';
import AuthCard from '../../components/cards/auth/AuthCard';


const SignUpScreen = ({navigation}) => {
    return (
        <ScrollView
          style={styles.scrollContainer}
          contentContainerStyle={styles.scrollContainerLayout}>
          <View style={styles.cardContainer}>
            <AuthCard
              cardTypeTitle="Signup"
              title="Universidad de Bastos">
              </AuthCard>
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
        flex: .6,
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
    

export default SignUpScreen;
