import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

import { theMovieDbPictureUrl } from '../utils/config';

function MoviesListItem({ movie }) {
  const { poster_path, id, original_title } = movie;
  const poster = `${theMovieDbPictureUrl}${poster_path}`;

  return (
    <div className="column is-one-quarter" key={id}>
      <Link to={`/movie/${id}`}>
        <img src={poster} alt={original_title}/>
      </Link>
    </div>
  );
}

MoviesListItem.propTypes = {
  movie: PropTypes.object.isRequired
};

export default MoviesListItem;
