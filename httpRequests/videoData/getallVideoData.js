import React from 'react';

//getToken
//https://universidad-de-bastos.herokuapp.com/videos/
const getAllVideoData = async (setRequestStatus, token) => {
  try {
    setRequestStatus('PENDING');
    const getAllVideoDataResponse = await fetch(
      'http://localhost:5000/videos/',
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
