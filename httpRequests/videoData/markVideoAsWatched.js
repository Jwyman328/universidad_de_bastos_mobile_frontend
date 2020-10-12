import React from 'react';
import { getBackendBaseRoute } from '../../getEnvVars/getBackendBaseRoute';

const markVideoAsWatched = async (videoUrl,token, setRequestStatus) => {
    try{
        const REACT_APP_BACKEND_BASE_ROUTE = getBackendBaseRoute(process.env.NODE_ENV)
        setRequestStatus('PENDING');
        const markVideoAsWatchedResponse =  await fetch(
            `${REACT_APP_BACKEND_BASE_ROUTE}/videos/`,
            {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                Authorization: `JWT ${token}`,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({videoUrl: videoUrl,}),
            },
          );
          setRequestStatus('SUCCESS');
        return markVideoAsWatchedResponse
    }catch (err) {
        setRequestStatus('ERROR');
        console.log('we have an err', err)
    }
  
}

export default markVideoAsWatched;