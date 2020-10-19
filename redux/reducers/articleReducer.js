import { ADD_ARTICLES, SET_GET_ARTICLES_REQUEST_STATUS } from "../types/articles";


const initialState = {
  allArticles: undefined,
  getArticlesRequestStatus:undefined,
};

function articleReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ARTICLES:
      return {...state, allArticles:action.payload};
  
    case SET_GET_ARTICLES_REQUEST_STATUS:
      return {...state, getArticlesRequestStatus:action.payload};
    default:
      return state;
  }
}

export default articleReducer;
