//SET_LOGIN_DATA

import React from 'react';
import { Platform } from 'react-native';
import { getBackendBaseRoute } from '../../../getEnvVars/getBackendBaseRoute';
import setLoginRequestStatus from '../../actions/user/setLoginRequestStatus';
import setLoginData from '../../actions/user/setLoginData'
import setSignUpRequestStatus from '../../actions/user/setSignUpRequestStatus';

function signUpUser(username,password) {
    return async (dispatch, getState) => {
        try{
            const REACT_APP_BACKEND_BASE_ROUTE = getBackendBaseRoute(process.env.NODE_ENV, Platform.OS)

            dispatch(setSignUpRequestStatus('PENDING'));

            const signUpUserResponse =   await fetch(
                `${REACT_APP_BACKEND_BASE_ROUTE}/auth/sign_up`,
                {
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({username: username, password: password}),
                },
              );
            
            dispatch(setSignUpRequestStatus('SUCCESS'));

            const signUpUserResponseJson = await signUpUserResponse.json()

            const token = signUpUserResponseJson.token
            dispatch(setLoginData(username,token)) 
        }catch (err) {
            setSignUpRequestStatus('ERROR');
            console.log('we have an err in signup user', err)
        }
      
    };
  }



export default signUpUser;