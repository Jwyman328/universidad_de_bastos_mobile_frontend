import React from 'react';

const loginUser = async (username, password, setRequestStatus) => {
    try{
        setRequestStatus('PENDING');
        const loginUserResponse =  await fetch(
            'https://universidad-de-bastos.herokuapp.com/auth/login',
            {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({username: username, password: password}),
            },
          );
          setRequestStatus('SUCCESS');
        return loginUserResponse
    }catch (err) {
        setRequestStatus('ERROR');
        console.log('we have an err', err)
    }
  
}

export default loginUser;