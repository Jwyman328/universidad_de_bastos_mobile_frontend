import React, {useState} from 'react';

import GlobalDataContext from './data/global/globalContext';
import NavigationComponent from './NavigationComponent';

const GlobalDataComponent = () => {
  const [token, setToken] = useState(undefined);
  const [loginRequestStatus, setLoginRequestStatus] = useState(undefined);
  const globalData = {
    token: {value: token, setToken: setToken},
    loginRequestStatus: {
      value: loginRequestStatus,
      setLoginRequestStatus: setLoginRequestStatus,
    },
  };
  return (
    <GlobalDataContext.Provider value={globalData}>
      <NavigationComponent></NavigationComponent>
    </GlobalDataContext.Provider>
  );
};

export default GlobalDataComponent;
