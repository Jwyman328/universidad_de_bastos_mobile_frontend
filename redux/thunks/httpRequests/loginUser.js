import React from 'react';
import { Platform } from 'react-native';
import { getBackendBaseRoute } from '../../../getEnvVars/getBackendBaseRoute';
import setLoginRequestStatus from '../../actions/user/setLoginRequestStatus';
import setLoginData from '../../actions/user/setLoginData'

function loginUser(username,password) {
    return async (dispatch, getState) => {
        try{
            const REACT_APP_BACKEND_BASE_ROUTE = getBackendBaseRoute(process.env.NODE_ENV, Platform.OS)

            dispatch(setLoginRequestStatus('PENDING'));

            const loginUserResponse =  await fetch(
                `${REACT_APP_BACKEND_BASE_ROUTE}/auth/login`,
                {
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({username: username, password: password}),
                },
              );
            
            dispatch(setLoginRequestStatus('SUCCESS'));

            const loginUserResponseJson = await loginUserResponse.json()
            const token = loginUserResponseJson.token
            dispatch(setLoginData(username,token)) 
        }catch (err) {
            setLoginRequestStatus('ERROR');
            console.log('we have an err', err)
        }
      
    };
  }



export default loginUser;