import React from 'react';

export const SET_INSTITUTION = 'SET_INSTITUTION';
export const SET_TIPO = 'SET_TIPO';
export const SET_FECHA = 'SET_FECHA';
export const SET_MIRADO = 'SET_MIRADO'

const initialSortFilterState = {
    'institution':'Todos',
    'tipo':'Todos',
    'mirado':'Todos',
    'fecha':'Nuevo'
  }

export function videoSortReducer(state, action) {
  switch (action.type) {
    case SET_INSTITUTION:
      const institution = {institution: action.payload.institution};
      return {...state, ...institution};

    case SET_TIPO:
      const tipo = {tipo: action.payload.tipo};
      return {...state, ...tipo};

    case SET_FECHA:
      const fecha = {fecha: action.payload.fecha};
      return {...state, ...fecha};

    case SET_MIRADO:
        const mirado = {mirado: action.payload.mirado};
        return {...state, ...mirado};
  }
  return state;
}

