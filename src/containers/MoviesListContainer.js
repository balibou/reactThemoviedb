import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../actions';
import MoviesListItem from '../components/MoviesListItem';
import Loader from '../components/Loader';

class MoviesList extends Component {
  componentDidMount() {
    this.props.actions.getMovies();
  }

  renderMoviesList() {
    return (
      <div className="container">
        <div className="column">
          <div className="title is-4 canal-plus-title">MOVIES ON CANAL +</div>
          <hr />
        </div>
        <div className="columns is-multiline">
          {this.props.moviesList.map((movie) =>
            <MoviesListItem movie={movie} key={movie.id}/>
          )}
        </div>
      </div>
    );
  }

  render() {
    if (!this.props.isLoaded) return <Loader />;
    return this.renderMoviesList();
  }
}

MoviesList.propTypes = {
  moviesList: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  isLoaded: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    moviesList: state.movies.data,
    isLoaded: state.movies.isLoaded
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesList);
