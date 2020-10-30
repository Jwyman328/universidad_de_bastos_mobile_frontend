import React from 'react';
import { Platform } from 'react-native';
import { getBackendBaseRoute } from '../../getEnvVars/getBackendBaseRoute';

const markBookAsUnRead = async (bookId,token, setRequestStatus) => {
    try{
        const REACT_APP_BACKEND_BASE_ROUTE = getBackendBaseRoute(process.env.NODE_ENV, Platform.OS)

        setRequestStatus('PENDING');
        const markBookAsReadUnResponse =  await fetch(
            `${REACT_APP_BACKEND_BASE_ROUTE}/books/read/${bookId}`,
            {
              method: 'DELETE',
              headers: {
                Accept: 'application/json',
                Authorization: `JWT ${token}`,
                'Content-Type': 'application/json',
              },
            },
          );
          setRequestStatus('SUCCESS');
        return markBookAsReadUnResponse
    }catch (err) {
        setRequestStatus('ERROR');
        console.log('we have an err', err)
    }
  
}

export default markBookAsUnRead;