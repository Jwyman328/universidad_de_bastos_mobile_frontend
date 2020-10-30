import { SET_LOGIN_REQUEST_STATUS, SET_USER_DATA, SET_LOGIN_DATA, SIGNUP_USER,FAILED_SIGNUP } from "../types/user";


const initialState = {
    username:'',
    token:undefined, 
    loginRequestStatus:undefined,  // PENDING | SUCCESS | ERROR
    signupSuccessful:false,
    signUpErrorMessages:[],
}
  

  function userReducer(state = initialState, action) {
    switch (action.type) {
      case SET_USER_DATA:
        return {...state, ...action.payload.userData}; //example payload {payload:{userData:{username:'testUser@gmail.com'}}}
      case SET_LOGIN_DATA:
          return {...state, token: action.payload.token, username: action.payload.username}
      case SET_LOGIN_REQUEST_STATUS:
          return {...state, loginRequestStatus:action.payload }

      case SIGNUP_USER:
        const currentErrorMessages = []

        if (action.payload.username?.length < 7){
            currentErrorMessages.push('username atleast 8 letters')
        }

        if (action.payload.password?.length < 7){
            currentErrorMessages.push('password atleast 8 letters')
        }

        if (action.payload.password !== action.payload.passwordRetyped){
            currentErrorMessages.push('password and retyped password do not match')
        }

        if (currentErrorMessages.length === 0){
            const signupSuccessful = {signupSuccessful:'NO_INPUT_ERRORS', signUpErrorMessages:currentErrorMessages}
            
            return {...state, ...signupSuccessful}
        }else{
            const signupSuccessful = {signupSuccessful:false}
            return {...state, ...signupSuccessful, signUpErrorMessages:currentErrorMessages}
        }

      case FAILED_SIGNUP:
        const allErrorMsgs = [...state.signUpErrorMessages, 'User name is already taken, choose another']
        const signupFailure = {signupSuccessful:false}
        return {...state, ...signupFailure, signUpErrorMessages:allErrorMsgs}
  
      default:
        return state;
    }
  }
  
  export default userReducer;
  