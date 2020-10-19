import React from 'react';
import {Platform} from 'react-native';
import {getBackendBaseRoute} from '../../../getEnvVars/getBackendBaseRoute';
import setBookData from '../../actions/books/setBookData';
import setGetBookRequestStatus from '../../actions/books/setGetBookRequestStatus';

function fetchBooks() {
  return async (dispatch, getState) => {
    try {
      
      const {user}= getState();
      const token = user.token
      console.log(token, 'waht is token')
      const REACT_APP_BACKEND_BASE_ROUTE = getBackendBaseRoute(
        process.env.NODE_ENV,
        Platform.OS,
      );

      dispatch(setGetBookRequestStatus('PENDING'));

      const getBookRequestResponse = await fetch(
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
      dispatch(setGetBookRequestStatus('SUCCESS'));

      const getBookRequestResponseJson = await getBookRequestResponse.json();

      dispatch(setBookData(getBookRequestResponseJson));
    } catch (err) {
      dispatch(setGetBookRequestStatus('ERROR'));
      console.log('we have an err in fetch books', err);
    }
  };
}

export default fetchBooks;

