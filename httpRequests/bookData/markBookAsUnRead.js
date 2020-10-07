import React from 'react';

const markBookAsUnRead = async (bookId,token, setRequestStatus) => {
    try{
        setRequestStatus('PENDING');
        const markBookAsReadUnResponse =  await fetch(
            `http://localhost:5000/books/read/${bookId}`,
            {
              method: 'DELETE',
              headers: {
                Accept: 'application/json',
                Authorization: `JWT ${token}`,
                'Content-Type': 'application/json',
              },
            },
          );
          setRequestStatus('SUCCESS');
        return markBookAsReadUnResponse
    }catch (err) {
        setRequestStatus('ERROR');
        console.log('we have an err', err)
    }
  
}

export default markBookAsUnRead;