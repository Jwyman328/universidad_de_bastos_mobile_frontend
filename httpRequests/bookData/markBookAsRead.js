import React from 'react';

const markBookAsRead = async (bookId,token, setRequestStatus) => {
    try{
        setRequestStatus('PENDING');
        const markBookAsReadResponse =  await fetch(
            'http://localhost:5000/books/read/',
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
          setRequestStatus('SUCCESS');
        return markBookAsReadResponse
    }catch (err) {
        setRequestStatus('ERROR');
        console.log('we have an err', err)
    }
  
}

export default markBookAsRead;