import React, { Component } from 'react';
import {Link} from 'react-router';

class Movie extends Component {
  render() {
    const { poster_path, id, original_title } = this.props.movie
    const poster = `https://image.tmdb.org/t/p/w500${poster_path}`;

    return (
      <div className="column is-one-quarter" key={id}>
        <Link to={`/movie/${id}`}>
          <img src={poster} alt={original_title}/>
        </Link>
      </div>
    )
  }
}

export default Movie;
