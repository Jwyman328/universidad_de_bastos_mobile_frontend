import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';

import {StyleSheet, View, Text, TextInput} from 'react-native';
import SubmitButton from '../../buttons/SubmitButton';

const AuthCard = ({cardTypeTitle, title}) => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const navigation = useNavigation();

  const navigateToPageName = cardTypeTitle === 'Login' ? 'Signup' : 'Login';

  const handleNavigateIn = () => {
    navigation.navigate('Home');
  };

  const handleNavigateTo = () => {
    navigation.navigate(navigateToPageName);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title.toUpperCase()}</Text>

      <View style={styles.cardTypeTitleContainer}>
        <Text style={styles.cardTypeTitle}>{cardTypeTitle}</Text>
      </View>

      <View style={styles.userInputContainer}>
        <TextInput
          placeholderTextColor="black"
          placeholder="username"
          style={styles.userInput}
          onChangeText={(username) => setUserName(username)}></TextInput>
        <TextInput
          secureTextEntry={true}
          placeholderTextColor="black"
          placeholder="password"
          style={styles.userInput}
          onChangeText={(password) => setPassword(password)}></TextInput>
      </View>

      <View style={styles.submitButtonContainer}>
        <SubmitButton
          buttonColor="#03b1fc"
          handleClick={handleNavigateIn}
          title={cardTypeTitle}></SubmitButton>
        <Text style={styles.buttonSeparatorText}>Or</Text>
        <SubmitButton
          buttonColor="#99d0e8"
          handleClick={handleNavigateTo}
          title={navigateToPageName}></SubmitButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1339c2',
    width: '70%',
    flex: 1,
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    position: 'relative',
    padding: '5%',
    //paddingBottom: 50,
  },
  title: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Palatino-Bold',
    flex: 1,
    //backgroundColor: 'pink',
    textAlign: 'center',
  },
  cardTypeTitleContainer: {
    flex: 1,
    width: '100%',
    //backgroundColor: 'black',
    justifyContent: 'center',
  },
  cardTypeTitle: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Palatino-Bold',
    width: '100%',
    alignSelf: 'center',
    position: 'relative',
  },
  userInputContainer: {
    width: '100%',
    position: 'relative',
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    //backgroundColor: 'purple',
  },
  userInput: {
    color: 'black',
    width: '100%',
    minWidth: 200,
    backgroundColor: 'white',
    height: 25,
    minHeight: 10,
    maxHeight: 35,
    marginTop: 20,
    paddingLeft: 5,
  },
  submitButtonContainer: {
    flex: 1.5,
    //backgroundColor: 'green',
    width: '100%',
    //justifyContent:'flex-end',
    alignItems: 'flex-end',
    marginTop: 40,
  },
  buttonSeparatorText: {
    textAlign: 'center',
    width: '100%',
    marginBottom: 7,
    fontSize: 20,
    color: 'white',
  },
});

export default AuthCard;
