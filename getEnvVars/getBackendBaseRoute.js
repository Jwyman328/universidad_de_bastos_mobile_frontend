import React from 'react'

export  const getBackendBaseRoute = (process, platform) => {
    if(process === 'production'){
        return 'https://universidad-de-bastos.herokuapp.com'
    }else{
        if(platform ==='ios'){
            return 'http://localhost:5000'
        }else{
            return 'http://10.0.2.2:5000'
        }
    }
}