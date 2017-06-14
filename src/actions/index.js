import axios from 'axios';
import { GET_MOVIES, GET_MOVIE, REMOVE_MOVIE } from '../constants';

export const getMovies = () => (dispatch) => {
  axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US`)
      .then(data => {
        dispatch({
          type: GET_MOVIES,
          payload: data
        });
      })
};

export const getMovie = (movieId) => (dispatch) => {
  axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`)
      .then(data => {
        dispatch({
          type: GET_MOVIE,
          payload: data
        });
      })
};

export const removeMovie = () => (dispatch) => {
    dispatch({
      type: REMOVE_MOVIE,
    });
};
