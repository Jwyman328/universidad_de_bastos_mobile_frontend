import React from 'react';
import { Platform } from 'react-native';
import { getBackendBaseRoute } from '../../getEnvVars/getBackendBaseRoute';

const getAllArticleData = async (setRequestStatus, token) => {
  try {
    
    const REACT_APP_BACKEND_BASE_ROUTE = getBackendBaseRoute(process.env.NODE_ENV, Platform.OS)
    setRequestStatus('PENDING');
    const getAllArticleDataResponse = await fetch(
      `${REACT_APP_BACKEND_BASE_ROUTE}/article/`,
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
    const getAllVideoDataResponseJson = await getAllArticleDataResponse.json();
    return getAllVideoDataResponseJson;
  } catch (err) {
    setRequestStatus('ERROR');
    console.log('we have an err', err);
  }
};

export default getAllArticleData;
