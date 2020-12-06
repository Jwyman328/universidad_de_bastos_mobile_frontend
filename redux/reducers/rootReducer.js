import {combineReducers} from 'redux'
import articleReducer from './articleReducer'
import bookReducer from './bookReducer'
import userReducer from './userReducer'
import videoReducer from './videoReducer'

import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from '@react-native-community/async-storage'

const persistConfig = {
  key: "root",
  storage: AsyncStorage
};

const rootRawReducer = combineReducers({
  books:bookReducer,
  user:userReducer,
  videos:videoReducer,
  articles:articleReducer,
})

const rootReducerPersist = persistReducer(persistConfig, rootRawReducer);



const rootReducer = (state, action) => {
  // when a logout action is dispatched it will reset redux state
  if (action.type === 'USER_LOGGED_OUT') {
    state = undefined;
    AsyncStorage.removeItem('persist:root')
  }

  return rootReducerPersist(state, action);
};


export default rootReducer