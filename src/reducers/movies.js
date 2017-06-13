import { GET_MOVIES } from '../constants';

const initialState = {
  isLoaded: false,
  data: [],
};

const movies = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return Object.assign({}, state, {isLoaded: true, data: action.payload.data.results});
    default:
      return state;
  }
};

export default movies;
