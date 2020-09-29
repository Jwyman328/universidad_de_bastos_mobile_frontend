import React, { useState } from 'react';

import GlobalDataContext from './data/global/globalContext';
import NavigationComponent from './NavigationComponent';


const GlobalDataComponent = () => {
  const [token,setToken] = useState(undefined)
  const [loginRequestStatus,setLoginRequestStatus] = useState('hello world')
  const globalData = {
      token: {value:token, setValue:setToken},
      loginRequestStatus : {value:loginRequestStatus, setValue:setLoginRequestStatus }
  }

  return (
    <GlobalDataContext.Provider value={globalData}>
        <NavigationComponent></NavigationComponent>
    </GlobalDataContext.Provider>

  );
};

export default GlobalDataComponent;