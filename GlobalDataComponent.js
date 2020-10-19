import React, {useState} from 'react';

import GlobalDataContext from './data/global/globalContext';
import NavigationComponent from './navigation/NavigationComponent';
import {Provider} from 'react-redux';
import store from './store';

const GlobalDataComponent = () => {
  const [token, setToken] = useState(undefined);

  const [loginRequestStatus, setLoginRequestStatus] = useState('hello world');
  const globalData = {
    token: {value: token, setValue: setToken},
    loginRequestStatus: {
      value: loginRequestStatus,
      setValue: setLoginRequestStatus,
    },
  };

  return (
    <Provider store={store}>
      <GlobalDataContext.Provider value={globalData}>
        <NavigationComponent></NavigationComponent>
      </GlobalDataContext.Provider>
    </Provider>
  );
};

export default GlobalDataComponent;
