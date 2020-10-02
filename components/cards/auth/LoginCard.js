import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState, useContext} from 'react';

import {StyleSheet, View, Text, TextInput} from 'react-native';
import GlobalDataContext from '../../../data/global/globalContext';
import loginUser from '../../../httpRequests/auth/login';
import SubmitButton from '../../buttons/SubmitButton';
import TextButtonSeparator from '../../buttons/TextButtonSeparator';
import loadingSpinnerStyles from '../../loadingSpinner/loadingSpinnerStyles';
import authCardStyles from './styles';

const LoginCard = () => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const globalContext = useContext(GlobalDataContext)
  const setToken = globalContext.token.setValue
  const loginRequestStatus = globalContext.loginRequestStatus.value
  const setLoginRequestStatus = globalContext.loginRequestStatus.setValue

  const title = 'Universidad de Bastos';
  const cardTypeTitle = 'Login';

  const navigation = useNavigation();


  function shouldShowLoadingSpinner(){
    if (loginRequestStatus === "PENDING"){
      return true
    }else{
      return false
    }
  }


  const navigateToHomeScreen = async () => {
    //send a post request to check if it is logging in
    try{

      const postResponse = await loginUser(username, password, setLoginRequestStatus)
      const responseJson = await postResponse.json()

      const userToken = await responseJson.token
      
      if (userToken){
        // create context api? add token to it and username 
        setToken(userToken)
        navigation.navigate('Home')
      }
      //;
    }catch(err){
      setLoginRequestStatus("ERROR")
      console.log('grr bear', err)
    }
   
  };

  const navigateToSignupScreen = () => {
    navigation.navigate('Signup');
  };

  return (
    <View style={authCardStyles.container}>
      <Text style={authCardStyles.title}>{title.toUpperCase()}</Text>

      <View style={authCardStyles.cardTypeTitleContainer}>
        <Text style={authCardStyles.cardTypeTitle}>{cardTypeTitle}</Text>
      </View>

      {shouldShowLoadingSpinner()?<View style={loadingSpinnerStyles.container}><Text>...LOADING</Text></View>: undefined}

     {shouldShowLoadingSpinner()? undefined :  <View style={authCardStyles.userInputContainer}>
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
      </View>}

     { shouldShowLoadingSpinner() ? undefined: 
      <View style={authCardStyles.submitButtonContainer}>
        <SubmitButton
          buttonColor="#03b1fc"
          handleClick={navigateToHomeScreen}
          title={cardTypeTitle}></SubmitButton>

        <TextButtonSeparator></TextButtonSeparator>

        <SubmitButton
          buttonColor="#99d0e8"
          handleClick={navigateToSignupScreen}
          title="Signup">

          </SubmitButton>
      </View> }
    </View>
  );
};

export default LoginCard;
