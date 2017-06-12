import axios from 'axios';
import { GET_MOVIES } from '../constants';

export const getMovies = () => (dispatch) => {
  axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US`)
      .then(data => {
        dispatch({
          type: GET_MOVIES,
          payload: data
        });
      })
};
