import React from 'react';
import { Platform } from 'react-native';
import { getBackendBaseRoute } from '../../getEnvVars/getBackendBaseRoute';

const loginUser = async (username, password, setRequestStatus) => {
    try{
        const REACT_APP_BACKEND_BASE_ROUTE = getBackendBaseRoute(process.env.NODE_ENV, Platform.OS)

        setRequestStatus('PENDING');
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
          setRequestStatus('SUCCESS');
        return loginUserResponse
    }catch (err) {
        setRequestStatus('ERROR');
        console.log('we have an err', err)
    }
  
}

export default loginUser;