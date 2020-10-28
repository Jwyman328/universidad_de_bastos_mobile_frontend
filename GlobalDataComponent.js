import React, {useState} from 'react';

import NavigationComponent from './navigation/NavigationComponent';
import {Provider} from 'react-redux';
//import store from './store';

import {getStore, getPersistor} from './store';
import {PersistGate} from 'redux-persist/integration/react';
import LoadingScreen from './screens/loading/loadingScreen';

const GlobalDataComponent = () => {
  const myStore = getStore();
  const myPersistor = getPersistor();

  return (
    <Provider store={myStore}>
      <PersistGate persistor={myPersistor} loading={<LoadingScreen />}  >
        <NavigationComponent></NavigationComponent>
      </PersistGate>
    </Provider>
  );
};

export default GlobalDataComponent;
