import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState, useContext, useCallback} from 'react';

import {StyleSheet, View, Text, TextInput, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getLoginRequestStatus} from '../../../redux/selectors/user/getLoginRequestStatus';
import {getToken} from '../../../redux/selectors/user/getToken';
import loginUser from '../../../redux/thunks/httpRequests/loginUser';

import SubmitButton from '../../buttons/SubmitButton';
import TextButtonSeparator from '../../buttons/TextButtonSeparator';
import loadingSpinnerStyles from '../../loadingSpinner/loadingSpinnerStyles';
import authCardStyles from './styles';

const LoginCard = () => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const dispatch = useDispatch();
  const token = useSelector(getToken);
  const loginRequestStatus = useSelector(getLoginRequestStatus);

  const title = 'Universidad de Bastos';
  const cardTypeTitle = 'Iniciar sesión';

  const navigation = useNavigation();

  function shouldShowLoadingSpinner() {
    if (loginRequestStatus === 'PENDING') {
      return true;
    } else {
      return false;
    }
  }

  const attemptToLoginUser = useCallback(
   () => dispatch(loginUser(username, password)),
 [dispatch,username,password])

  const navigateToHomeScreen = async () => {
    setUserName('');
    setPassword('');
    navigation.navigate('Home');
  };

  const navigateToSignupScreen = useCallback(
    () => {
      navigation.navigate('Signup');
    },
    [navigation]
  ) 

  useEffect(()=>{
    if (token){
      navigateToHomeScreen()
    }
  },[token])

  return (
    <View style={authCardStyles.container}>

      <Text style={authCardStyles.title}>{title.toUpperCase()}</Text>

      <View style={authCardStyles.cardTypeTitleContainer}>
        <Text style={authCardStyles.cardTypeTitle}>{cardTypeTitle}</Text>
      </View>

      {shouldShowLoadingSpinner() ? (
        <View style={loadingSpinnerStyles.container}>
          <Text>...LOADING</Text>
        </View>
      ) : undefined}

      {shouldShowLoadingSpinner() ? undefined : (
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
        </View>
      )}

      {shouldShowLoadingSpinner() ? undefined : (
        <View style={authCardStyles.submitButtonContainer}>
          <SubmitButton
            buttonColor="#03b1fc"
            handleClick={attemptToLoginUser}
            title={cardTypeTitle}></SubmitButton>

          <TextButtonSeparator></TextButtonSeparator>

          <SubmitButton
            buttonColor="#99d0e8"
            handleClick={navigateToSignupScreen}
            title="Regístrate"></SubmitButton>
        </View>
      )}
    </View>
  );
};

export default LoginCard;
