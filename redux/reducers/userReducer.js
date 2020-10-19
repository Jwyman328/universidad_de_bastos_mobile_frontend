import { SET_LOGIN_REQUEST_STATUS, SET_USER_DATA, SET_LOGIN_DATA } from "../types/user";


const initialState = {
    username:'',
    token:'', 
    loginRequestStatus:undefined  // PENDING | SUCCESS | ERROR
  };

  function userReducer(state = initialState, action) {
    switch (action.type) {
      case SET_USER_DATA:
        return {...state, ...action.payload.userData}; //example payload {payload:{userData:{username:'testUser@gmail.com'}}}
      case SET_LOGIN_DATA:
          return {...state, token: action.payload.token, username: action.payload.username}
      case SET_LOGIN_REQUEST_STATUS:
          return {...state, loginRequestStatus:action.payload }
      default:
        return state;
    }
  }
  
  export default userReducer;
  