import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import movies from './movies';
import movie from './movie';

const rootReducer = combineReducers({
  movies,
  movie,
  routing: routerReducer,
});

export default rootReducer;
