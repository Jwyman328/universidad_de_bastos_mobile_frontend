import React from 'react';
import { Platform } from 'react-native';
import { getBackendBaseRoute } from '../../getEnvVars/getBackendBaseRoute';

const signupUser = async (username, password) => {
    try{
        const REACT_APP_BACKEND_BASE_ROUTE = getBackendBaseRoute(process.env.NODE_ENV, Platform.OS)

        const signupUserResponse =  await fetch(
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
          const signupUserResponseJson = await signupUserResponse.json()
          const token = signupUserResponseJson.token

          return token
    }catch (err) {
        console.log('we have an err', err)
        return 'ERROR'
    }
  
}

export default signupUser;