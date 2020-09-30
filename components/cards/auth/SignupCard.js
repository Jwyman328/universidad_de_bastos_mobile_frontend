import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useReducer, useState} from 'react';

import {StyleSheet, View, Text, TextInput} from 'react-native';
import {signUpCardFormReducer, SET_USERNAME, SET_PASSWORD, SET_PASSWORD_RETYPED,SIGNUP_USER, initialSignupCardReducerValues } from '../../../reducers/forms/signUpCardFormReducer';
import SubmitButton from '../../buttons/SubmitButton';
import authCardStyles from './styles';

const SignupCard = () => {
  const [passwordRetyped, setPasswordRetyped] = useState();

  
  const [signUpFormReducerValues, dispatch] = useReducer(signUpCardFormReducer,initialSignupCardReducerValues);

  const title = 'Universidad de Bastos';
  const cardTypeTitle = 'Signup';

  const navigation = useNavigation();

  const navigateToHomeScreen = () => {
    dispatch({type:SIGNUP_USER})

    navigation.navigate('Home');
  };

  const navigateToLoginScreen = () => {
    navigation.navigate('Login');
  };

  function setUserName(username){
    dispatch({type:SET_USERNAME, payload:{username:username}})
  }

  function setPassword(password){
    dispatch({type:SET_PASSWORD, payload:{password:password}})
  }

  function setPasswordReTyped(passwordRetyped){
    dispatch({type:SET_PASSWORD_RETYPED, payload:{passwordRetyped:passwordRetyped}})
  }

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
