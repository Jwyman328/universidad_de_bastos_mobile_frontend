import React from 'react';

export const SET_USERNAME = 'SET_USERNAME';
export const SET_PASSWORD = 'SET_PASSWORD';
export const SET_PASSWORD_RETYPED = 'SET_PASSWORD_RETYPED';
export const SIGNUP_USER = 'SIGNUP_USER'

export const initialSignupCardReducerValues = {
    username:'',
    password:'',
    passwordRetyped:'',
    signupSuccessful:false,
    signUpErrorMessage:[],
}

export function signUpCardFormReducer(state, action) {
  switch (action.type) {
    case SET_USERNAME:
      const username = {username: action.payload.username};
      return {state, ...username};

    case SET_PASSWORD:
      const password = {password: action.payload.password};
      return {state, ...password};

    case SET_PASSWORD_RETYPED:
      const passwordRetyped = {passwordRetyped: action.payload.passwordRetyped};
      return {state, ...passwordRetyped};

    case SIGNUP_USER:
        const currentErrorMessages = []

        if (state.username?.length < 7){
            currentErrorMessages.push('username needs to be atleast 8 letters long')
        }

        if (state.password?.length < 7){
            currentErrorMessages.push('password needs to be atleast 8 letters long')
        }

        if (state.password !== state.passwordRetyped){
            currentErrorMessages.push('password needs to be atleast 8 letters long')
        }

        if (currentErrorMessages.length === 0){
            const signupSuccessful = {signupSuccessful:true}
            console.log('successful')
            return {state, ...signupSuccessful}
        }else{
            console.log('failure')
            console.log(currentErrorMessages)
            const signupSuccessful = {signupSuccessful:false}
            return {state, ...signupSuccessful}
        }
  }
  return state;
}
