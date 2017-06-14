import { GET_MOVIE, REMOVE_MOVIE } from '../constants';

const initialState = {
  isLoaded: false,
  data: [],
};

const movie = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE:
      return Object.assign({}, state, {isLoaded: true, data: action.payload.data});
    case REMOVE_MOVIE:
      return Object.assign({}, {isLoaded: false, data: []});
    default:
      return state;
  }
};

export default movie;
