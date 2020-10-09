import React from 'react';


export const SET_FECHA = 'SET_FECHA';


export function articleCenterSortReducer(state, action) {
  switch (action.type) {
    case SET_FECHA:
      const fecha = {fecha: action.payload.fecha};
      return {...state, ...fecha};

  }
  return state;
}
