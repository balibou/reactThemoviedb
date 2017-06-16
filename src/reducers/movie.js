import { GET_MOVIE, REMOVE_MOVIE, GET_MOVIE_FAILED } from '../constants';

const initialState = {
  isLoaded: false,
  data: [],
  error: false
};

const movie = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE:
      return Object.assign({}, state, {isLoaded: true, data: action.payload.data});
    case REMOVE_MOVIE:
      return Object.assign({}, {...initialState});
    case GET_MOVIE_FAILED:
      return Object.assign({}, state, { error: true });
    default:
      return state;
  }
};

export default movie;
