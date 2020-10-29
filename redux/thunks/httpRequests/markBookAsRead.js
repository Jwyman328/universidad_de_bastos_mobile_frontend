import React from 'react';
import {Platform} from 'react-native';
import {getBackendBaseRoute} from '../../../getEnvVars/getBackendBaseRoute';
import setBookAsRead from '../../actions/books/setBookAsRead';
import setGetBookRequestStatus from '../../actions/books/setGetBookRequestStatus';

function markBookAsRead(bookId) {
  return async (dispatch, getState) => {
    try {
      const {user}= getState();
      const token = user.token
      const REACT_APP_BACKEND_BASE_ROUTE = getBackendBaseRoute(
        process.env.NODE_ENV,
        Platform.OS,
      );

      //dispatch(setGetBookRequestStatus('PENDING'));

      const markBookAsUnReadResponse =  await fetch(
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
      //dispatch(setGetBookRequestStatus('SUCCESS'));

      const markBookAsUnReadResponseJson = await markBookAsUnReadResponse.json();

      dispatch(setBookAsRead(bookId));
    } catch (err) {
      //dispatch(setGetBookRequestStatus('ERROR'));
      console.log('we have an err in fetch books', err);
    }
  };
}

export default markBookAsRead;

