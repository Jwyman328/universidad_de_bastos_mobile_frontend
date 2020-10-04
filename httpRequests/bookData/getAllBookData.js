import React from 'react';

//getToken
//https://universidad-de-bastos.herokuapp.com/videos/
const getAllBookData = async (setRequestStatus, token) => {
  try {
    setRequestStatus('PENDING');
    const getAllBookDataResponse = await fetch(
      'http://localhost:5000/books/',
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
