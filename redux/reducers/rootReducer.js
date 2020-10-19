import {combineReducers} from 'redux'
import articleReducer from './articleReducer'
import bookReducer from './bookReducer'
import userReducer from './userReducer'
import videoReducer from './videoReducer'


const rootReducer = combineReducers({
  books:bookReducer,
  user:userReducer,
  videos:videoReducer,
  articles:articleReducer,
})

export default rootReducer