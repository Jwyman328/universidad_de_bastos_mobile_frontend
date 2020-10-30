import React from 'react';
import {Platform} from 'react-native';
import {getBackendBaseRoute} from '../../../getEnvVars/getBackendBaseRoute';
import setGetVideoRequestStatus from '../../actions/videos/setGetVideoRequestStatus';
import setVideoData from '../../actions/videos/setVideoData';


function fetchVideos() {
  return async (dispatch, getState) => {
    try {
      
      const {user}= getState();
      const token = user.token

      const REACT_APP_BACKEND_BASE_ROUTE = getBackendBaseRoute(
        process.env.NODE_ENV,
        Platform.OS,
      );

      dispatch(setGetVideoRequestStatus('PENDING'));

      const getVideoRequestResponse =  await fetch(
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
      dispatch(setGetVideoRequestStatus('SUCCESS'));

      const getVideoRequestResponseJson = await getVideoRequestResponse.json();

      dispatch(setVideoData(getVideoRequestResponseJson));
    } catch (err) {
      dispatch(setGetVideoRequestStatus('ERROR'));
      console.log('we have an err in fetch books', err);
    }
  };
}

export default fetchVideos;

