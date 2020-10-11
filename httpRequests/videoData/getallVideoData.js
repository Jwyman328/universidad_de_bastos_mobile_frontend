import React from 'react';
import { getBackendBaseRoute } from '../../getEnvVars/getBackendBaseRoute';

const getAllVideoData = async (setRequestStatus, token) => {
  try {
    const REACT_APP_BACKEND_BASE_ROUTE = getBackendBaseRoute(process.env.NODE_ENV)

    setRequestStatus('PENDING');
    const getAllVideoDataResponse = await fetch(
      `${REACT_APP_BACKEND_BASE_ROUTE}/videos/`,
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
    const getAllVideoDataResponseJson = await getAllVideoDataResponse.json();
    return getAllVideoDataResponseJson;
  } catch (err) {
    setRequestStatus('ERROR');
    console.log('we have an err', err);
  }
};

export default getAllVideoData;
