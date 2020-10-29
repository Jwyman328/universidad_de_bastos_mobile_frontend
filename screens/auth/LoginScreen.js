import {useNavigation} from '@react-navigation/native';
import React, {useEffect, memo} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
} from 'react-native';
import {useSelector} from 'react-redux';
import LoginCard from '../../components/cards/auth/LoginCard';
import { getToken } from '../../redux/selectors/user/getToken';
import LoadingScreen from '../loading/loadingScreen';
import authScreenStyles from './styles/authScreenStyles';

const LoginScreen = (props) => {
  const token = useSelector(getToken);

  const navigate = useNavigation();

  useEffect(() => {
    if (token) {
      navigate.navigate('Home');
    }
  });

  return (
    <View style={{flex:1}}>
      {token !== undefined? <LoadingScreen />:
      <ScrollView
        style={authScreenStyles.scrollContainer}
        contentContainerStyle={authScreenStyles.scrollContainerLayout}>
        <View style={authScreenStyles.cardContainer}>
          <LoginCard></LoginCard>
        </View>
      </ScrollView>
      }
    </View>
  );
};

export default memo(LoginScreen);
