import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useReducer, useState} from 'react';

import {StyleSheet, View, Text, TextInput} from 'react-native';
import {
  signUpCardFormReducer,
  SET_USERNAME,
  SET_PASSWORD,
  SET_PASSWORD_RETYPED,
  SIGNUP_USER,
  initialSignupCardReducerValues,
} from '../../../reducers/forms/signUpCardFormReducer';
import SubmitButton from '../../buttons/SubmitButton';
import TextButtonSeparator from '../../buttons/TextButtonSeparator';
import ErrorMessage from '../../messages/ErrorMessage';
import MultiMessageContainer from '../../messages/MultiMessageContainer';
import authCardStyles from './styles';


const SignupCard = () => {
  const [signUpFormReducerValues, dispatch] = useReducer(
    signUpCardFormReducer,
    initialSignupCardReducerValues,
  );

  const {
    username,
    password,
    passwordRetyped,
    signupSuccessful,
    signUpErrorMessages,
  } = signUpFormReducerValues;

  const title = 'Universidad de Bastos';
  const cardTypeTitle = 'Signup';

  const navigation = useNavigation();

  const navigateToHomeScreen = () => {
    navigation.navigate('Home');
  };

  const navigateToLoginScreen = () => {
    navigation.navigate('Login');
  };

  function setUserName(username) {
    dispatch({type: SET_USERNAME, payload: {username: username}});
  }

  function setPassword(password) {
    dispatch({type: SET_PASSWORD, payload: {password: password}});
  }

  function setPasswordRetyped(passwordRetyped) {
    dispatch({
      type: SET_PASSWORD_RETYPED,
      payload: {passwordRetyped: passwordRetyped},
    });
  }

  function signUpUser() {
    dispatch({type: SIGNUP_USER});
  }

  function displayErrorMessageComponents() {
    const errorMessages = signUpErrorMessages.map((errorMessageTextContent) => {
      return (
        <ErrorMessage
          key={errorMessageTextContent}
          errorMessage={errorMessageTextContent}></ErrorMessage>
      );
    });
    if (errorMessages.length > 0) {
      return <MultiMessageContainer>{errorMessages}</MultiMessageContainer>;
    }
  }

  useEffect(() => {
    if (signupSuccessful) {
      navigateToHomeScreen();
    }
  }, [signupSuccessful]);

  return (
    <View style={authCardStyles.container}>
      <Text style={authCardStyles.title}>{title.toUpperCase()}</Text>

      <View style={authCardStyles.cardTypeTitleContainer}>
        <Text style={authCardStyles.cardTypeTitle}>{cardTypeTitle}</Text>
      </View>

      {displayErrorMessageComponents()}

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
          onChangeText={(passwordRetyped) =>
            setPasswordRetyped(passwordRetyped)
          }></TextInput>
      </View>

      <View style={authCardStyles.submitButtonContainer}>
        <SubmitButton
          buttonColor="#03b1fc"
          handleClick={signUpUser}
          title={cardTypeTitle}></SubmitButton>

        <TextButtonSeparator></TextButtonSeparator>
        
        <SubmitButton
          buttonColor="#99d0e8"
          handleClick={navigateToLoginScreen}
          title="Login"></SubmitButton>
      </View>
    </View>
  );
};

export default SignupCard;
