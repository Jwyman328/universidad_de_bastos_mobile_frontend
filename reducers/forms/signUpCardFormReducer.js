import React from 'react';
import signupUser from '../../httpRequests/auth/signup';

export const SET_USERNAME = 'SET_USERNAME';
export const SET_PASSWORD = 'SET_PASSWORD';
export const SET_PASSWORD_RETYPED = 'SET_PASSWORD_RETYPED';
export const SIGNUP_USER = 'SIGNUP_USER'
export const SET_USER_TOKEN = 'SET_USER_TOKEN'
export const FAILED_SIGNUP = 'FAILED_SIGNUP'

export const initialSignupCardReducerValues = {
    username:'',
    password:'',
    passwordRetyped:'',

}

export  function signUpCardFormReducer(state, action) {
  switch (action.type) {
    case SET_USERNAME:
      const username = {username: action.payload.username};
      return {...state, ...username};

    case SET_PASSWORD:
      const password = {password: action.payload.password};
      return {...state, ...password};

    case SET_PASSWORD_RETYPED:
      const passwordRetyped = {passwordRetyped: action.payload.passwordRetyped};
      return {...state, ...passwordRetyped};

    default:
      return state;
  }
  
}

