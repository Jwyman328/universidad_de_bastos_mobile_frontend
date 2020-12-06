import React from 'react';
import { Platform } from 'react-native';
import { getBackendBaseRoute } from '../../getEnvVars/getBackendBaseRoute';

const markBookAsRead = async (bookId,token, setRequestStatus) => {
    try{
        const REACT_APP_BACKEND_BASE_ROUTE = getBackendBaseRoute(process.env.NODE_ENV, Platform.OS)
        setRequestStatus('PENDING');
        const markBookAsReadResponse =  await fetch(
            `${REACT_APP_BACKEND_BASE_ROUTE}/books/read/`,
            {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                Authorization: `JWT ${token}`,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({bookId: bookId,}),
            },
          );
          setRequestStatus('SUCCESS');
        return markBookAsReadResponse
    }catch (err) {
        setRequestStatus('ERROR');
        console.log('we have an err', err)
    }
  
}

export default markBookAsRead;