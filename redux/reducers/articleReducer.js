import { ADD_ARTICLES, SET_GET_ARTICLES_REQUEST_STATUS, SET_FECHA } from "../types/articles";


const initialState = {
  allArticles: undefined,
  getArticlesRequestStatus:undefined,
  fecha: 'Nuevo'
};

function articleReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ARTICLES:
      return {...state, allArticles:action.payload};
  
    case SET_GET_ARTICLES_REQUEST_STATUS:
      return {...state, getArticlesRequestStatus:action.payload};

    case SET_FECHA:
      return {...state, fecha:action.payload.fecha };
    default:
      return state;
  }
}

export default articleReducer;
