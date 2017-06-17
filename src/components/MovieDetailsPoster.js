import React from 'react';
import PropTypes from 'prop-types';

function MovieDetailsPoster({ poster }) {
  return (
    <div className="column is-6">
      <div className="image is-2by2">
        <img src={poster} alt="Movie poster" />
      </div>
    </div>
  );
}

MovieDetailsPoster.propTypes = {
  poster: PropTypes.string.isRequired
};

export default MovieDetailsPoster;
