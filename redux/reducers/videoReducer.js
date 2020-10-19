import { ADD_VIDEOS, SET_GET_VIDEOS_REQUEST_STATUS } from "../types/videos";


const initialState = {
  allVideos: undefined,
  videoRequestStatus:undefined,
};

function videoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_VIDEOS:
      return {...state, allVideos:action.payload};
  
    case SET_GET_VIDEOS_REQUEST_STATUS:
      return {...state, videoRequestStatus:action.payload};
    default:
      return state;
  }
}

export default videoReducer;
