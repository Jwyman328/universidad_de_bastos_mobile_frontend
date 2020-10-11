import React from 'react';
import {getBackendBaseRoute} from '../../getEnvVars/getBackendBaseRoute'

const getAllBookData = async (setRequestStatus, token) => {
  try {
    const REACT_APP_BACKEND_BASE_ROUTE = getBackendBaseRoute(process.env.NODE_ENV)
    console.log('what is the route',REACT_APP_BACKEND_BASE_ROUTE )
    setRequestStatus('PENDING');
    const getAllBookDataResponse = await fetch(
      `${REACT_APP_BACKEND_BASE_ROUTE}/books/`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: `JWT ${token}`,
          'Content-Type': 'application/json',
        },
      },
    );
    setRequestStatus('SUCCESS');
    const getAllBookDataResponseJson = await getAllBookDataResponse.json();
    return getAllBookDataResponseJson;
  } catch (err) {
    setRequestStatus('ERROR');
    console.log('we have an err', err);
  }
};

export default getAllBookData;
