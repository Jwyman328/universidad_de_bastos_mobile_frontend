import React, {useState} from 'react';

import GlobalDataContext from './data/global/globalContext';
import NavigationComponent from './navigation/NavigationComponent';
import {Provider} from 'react-redux';
import store from './store';

const GlobalDataComponent = () => {

  return (
    <Provider store={store}>
        <NavigationComponent></NavigationComponent>
    </Provider>
  );
};

export default GlobalDataComponent;
