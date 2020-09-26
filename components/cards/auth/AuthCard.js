import React, {useState} from 'react';

import {StyleSheet, View, Text, TextInput} from 'react-native';
import SubmitButton from '../../buttons/SubmitButton';

const AuthCard = ({cardTypeTitle, title}) => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const logIn = () => {
    console.log('log in component');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title.toUpperCase()}</Text>

      <Text style={styles.cardTypeTitle}>{cardTypeTitle}</Text>

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
      
      <SubmitButton handleClick={logIn} title={cardTypeTitle}></SubmitButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1339c2',
    width: '70%',
    height: '50%',
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    position: 'relative',
    paddingBottom: 50,
  },
  title: {
    fontSize: 30,
    color: 'white',
    padding: '5%',
    textAlign: 'center',
    fontFamily: 'Palatino-Bold',
    flex: 1,
    marginTop: 10,
  },
  cardTypeTitle: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Palatino-Bold',
    flex: 0.4,
    width: '100%',
    alignSelf: 'center',
    position: 'relative',
    top: -10,
  },
  userInputContainer: {
    width: '100%',
    position: 'relative',
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1.5,
  },
  userInput: {
    color: 'black',
    width: '80%',
    minWidth: 200,
    backgroundColor: 'white',
    height: 25,
    minHeight: 10,
    maxHeight: 35,
    marginTop: 20,
    paddingLeft: 5,
  },
});

export default AuthCard;
