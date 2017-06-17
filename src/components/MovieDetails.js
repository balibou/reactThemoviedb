import React from 'react';
import PropTypes from 'prop-types';

import { theMovieDbPictureUrl } from '../utils/config';
import MovieDetailsOverview from './MovieDetailsOverview';
import MovieDetailsPoster from './MovieDetailsPoster';

function MovieDetails({ movie }) {
  const {
    original_title,
    id,
    backdrop_path,
    vote_count,
    overview,
    release_date,
    homepage,
    budget,
    vote_average,
    poster_path
  } = movie;
  const poster = `${theMovieDbPictureUrl}${backdrop_path || poster_path}`;

  return (
    <div key={id}>
      <div className="section">
        <div className="container">
          <div className="columns">
            <MovieDetailsPoster
              poster={poster}
            />
            <MovieDetailsOverview
              original_title={original_title}
              vote_average={vote_average}
              vote_count={vote_count}
              overview={overview}
              release_date={release_date}
              homepage={homepage}
              budget={budget}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

MovieDetails.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieDetails;
