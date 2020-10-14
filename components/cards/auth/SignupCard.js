import {useNavigation} from '@react-navigation/native';
import React, {useContext, useEffect, useReducer, useState} from 'react';

import {StyleSheet, View, Text, TextInput} from 'react-native';
import GlobalDataContext from '../../../data/global/globalContext';
import signupUser from '../../../httpRequests/auth/signup';
import {
  signUpCardFormReducer,
  SET_USERNAME,
  SET_PASSWORD,
  SET_PASSWORD_RETYPED,
  SIGNUP_USER,
  SET_USER_TOKEN,
  FAILED_SIGNUP,
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

  const globalData = useContext(GlobalDataContext)
  const setToken = globalData.token.setValue

  const title = 'Universidad de Bastos';
  const cardTypeTitle = 'Regístrate';

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

  async function signUpUser() {
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
    if (signupSuccessful === true) {
      navigateToHomeScreen();
    }
    if (signupSuccessful === 'NO_INPUT_ERRORS'){
      setUserToken()
    }
   

  }, [signupSuccessful, signUpErrorMessages]);

  async function setUserToken(){
    const token = await signupUser(username,password)
    if (token !== 'ERROR'){
      dispatch({type: SET_USER_TOKEN});
      setToken(token)
    }else{
      dispatch({type:FAILED_SIGNUP})
    }
  }

  return (
    <View style={authCardStyles.container}>
      <Text style={authCardStyles.title}>{title.toUpperCase()}</Text>

      <View style={authCardStyles.cardTypeTitleContainer}>
        <Text style={authCardStyles.cardTypeTitle}>{cardTypeTitle}</Text>
      </View>

      {displayErrorMessageComponents()}

      <View style={authCardStyles.userInputContainer}>
        <TextInput
          placeholderTextColor="white"
          placeholder="usuario"
          style={authCardStyles.userInput}
          onChangeText={(username) => setUserName(username)}></TextInput>
        <TextInput
          secureTextEntry={true}
          placeholderTextColor="white"
          placeholder="contraseña"
          style={authCardStyles.userInput}
          onChangeText={(password) => setPassword(password)}></TextInput>
        <TextInput
          secureTextEntry={true}
          placeholderTextColor="white"
          placeholder="repite la contraseña"
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
          title="Iniciar sesión"></SubmitButton>
      </View>
    </View>
  );
};

export default SignupCard;
