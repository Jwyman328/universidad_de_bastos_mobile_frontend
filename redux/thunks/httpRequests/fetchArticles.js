import React from 'react';
import {Platform} from 'react-native';
import {getBackendBaseRoute} from '../../../getEnvVars/getBackendBaseRoute';
import setArticleData from '../../actions/articles/setArticleData';
import setGetArticleRequestStatus from '../../actions/articles/setGetArticleRequestStatus';


function fetchArticles() {
  return async (dispatch, getState) => {
    try {
      
      const {user}= getState();
      const token = user.token

      const REACT_APP_BACKEND_BASE_ROUTE = getBackendBaseRoute(
        process.env.NODE_ENV,
        Platform.OS,
      );

      dispatch(setGetArticleRequestStatus('PENDING'));

      const getArticlesRequestResponse =  await fetch(
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
      dispatch(setGetArticleRequestStatus('SUCCESS'));

      const getArticlesRequestResponseJson = await getArticlesRequestResponse.json();
      dispatch(setArticleData(getArticlesRequestResponseJson));

    } catch (err) {
      dispatch(setGetArticleRequestStatus('ERROR'));
      console.log('we have an err in fetchArticles', err);
    }
  };
}

export default fetchArticles;

