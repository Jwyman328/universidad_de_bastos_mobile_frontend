import React from 'react';

const getAllArticleData = async (setRequestStatus, token) => {
  try {
    setRequestStatus('PENDING');
    const getAllArticleDataResponse = await fetch(
      'http://localhost:5000/article/',
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
