import React from 'react'

export  const getBackendBaseRoute = (process) => {
    console.log('process', process)
    if(process === 'production'){
        return 'https://universidad-de-bastos.herokuapp.com'
    }else{
        return 'http://10.0.2.2:5000'
    }
}