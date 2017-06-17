import React from 'react';
import PropTypes from 'prop-types';

import { renderStarsRating } from '../utils/common';

function MovieDetailsOverview({
  original_title,
  vote_average,
  vote_count,
  overview,
  release_date,
  homepage,
  budget
}) {
  return (
    <div className="column is-5 is-offset-1">
      <div className="title is-2 canal-plus-title">{original_title}</div>
      <hr />
      <br />
      <p>
        {renderStarsRating(vote_average)}
        <strong>{vote_count} Votes</strong>
      </p>
      <br />
      <p>{overview}</p>
      <br />
      <table className="table">
        <tbody>
          <tr>
            <td className="has-text-right">
              <strong>Release date</strong>
            </td>
            <td>{release_date}</td>
          </tr>
          <tr>
            <td className="has-text-right">
              <strong>Website</strong>
            </td>
            <td><a href={homepage}>{homepage}</a></td>
          </tr>
          <tr>
            <td className="has-text-right">
              <strong>Budget</strong>
            </td>
            <td>${budget}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

MovieDetailsOverview.propTypes = {
  original_title: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  vote_count: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  homepage: PropTypes.string.isRequired,
  budget: PropTypes.number.isRequired
};

export default MovieDetailsOverview;
