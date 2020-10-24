import {
  ADD_VIDEOS,
  SET_GET_VIDEOS_REQUEST_STATUS,
  SET_INSTITUTION,
  SET_TIPO,
  SET_FECHA,
  SET_MIRADO,
  MARK_VIDEO_AS_WATCHED,
} from '../types/videos';

const initialState = {
  allVideos: undefined,
  videoRequestStatus: undefined,
  institution: 'Todos',
  tipo: 'Todos',
  mirado: 'Todos',
  fecha: 'Nuevo',
};

function videoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_VIDEOS:
      return {...state, allVideos: action.payload};

    case SET_GET_VIDEOS_REQUEST_STATUS:
      return {...state, videoRequestStatus: action.payload};

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

    case MARK_VIDEO_AS_WATCHED:
      const newVideoArray = state.allVideos?.map((video) => {
        if (video._id === action.payload) {
          const videoCopied = {...video};
          videoCopied.hasBeenWatchedByUser = true;
          return videoCopied;
        } else {
          return video;
        }
      });

      return {...state, allVideos:newVideoArray};

    default:
      return state;
  }
}

export default videoReducer;
