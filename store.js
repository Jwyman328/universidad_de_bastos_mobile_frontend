import {createStore, applyMiddleware} from 'redux'
import rootReducer from './redux/reducers/rootReducer';
import thunk from 'redux-thunk';

const middleWares = [thunk]

if (__DEV__) {
    const createDebugger = require('redux-flipper').default;
    middleWares.push(createDebugger());
  }

const store = createStore(rootReducer,applyMiddleware(...middleWares));

export default store;