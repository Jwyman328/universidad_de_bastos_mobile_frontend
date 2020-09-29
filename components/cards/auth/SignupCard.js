import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';

import {StyleSheet, View, Text, TextInput} from 'react-native';
import SubmitButton from '../../buttons/SubmitButton';
import authCardStyles from './styles';

const SignupCard = () => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [passwordRetyped, setPasswordRetyped] = useState();

  

  const title = 'Universidad de Bastos';
  const cardTypeTitle = 'Signup';

  const navigation = useNavigation();

  const navigateToHomeScreen = () => {
    navigation.navigate('Home');
  };

  const navigateToLoginScreen = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={authCardStyles.container}>
      <Text style={authCardStyles.title}>{title.toUpperCase()}</Text>

      <View style={authCardStyles.cardTypeTitleContainer}>
        <Text style={authCardStyles.cardTypeTitle}>{cardTypeTitle}</Text>
      </View>

      <View style={authCardStyles.userInputContainer}>
        <TextInput
          placeholderTextColor="black"
          placeholder="username"
          style={authCardStyles.userInput}
          onChangeText={(username) => setUserName(username)}></TextInput>
        <TextInput
          secureTextEntry={true}
          placeholderTextColor="black"
          placeholder="password"
          style={authCardStyles.userInput}
          onChangeText={(password) => setPassword(password)}></TextInput>
                  <TextInput
          secureTextEntry={true}
          placeholderTextColor="black"
          placeholder="retype password"
          style={authCardStyles.userInput}
          onChangeText={(passwordRetyped) => setPasswordRetyped(passwordRetyped)}></TextInput>
      </View>

      <View style={authCardStyles.submitButtonContainer}>
        <SubmitButton
          buttonColor="#03b1fc"
          handleClick={navigateToHomeScreen}
          title={cardTypeTitle}></SubmitButton>

        <Text style={authCardStyles.buttonSeparatorText}>Or</Text>

        <SubmitButton
          buttonColor="#99d0e8"
          handleClick={navigateToLoginScreen}
          title="Login"></SubmitButton>
      </View>
    </View>
  );
};

export default SignupCard;
