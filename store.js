import {createStore, applyMiddleware} from 'redux'
import rootReducer from './redux/reducers/rootReducer';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';



const middleWares = [thunk]

if (__DEV__) {
    const createDebugger = require('redux-flipper').default;
    middleWares.push(createDebugger());
  }

const store = createStore(rootReducer,applyMiddleware(...middleWares));

const persistor = persistStore(store);

const getPersistor = () => persistor;
const getStore = () => store;
const getState = () => {
    return store.getState();
};


export {
  getStore,
  getState,
  getPersistor
};
export default {
  getStore,
  getState,
  getPersistor
}