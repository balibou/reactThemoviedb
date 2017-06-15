import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../actions';
import Movie from './Movie';
import Loader from './Loader';

class MoviesList extends Component {
  componentDidMount() {
    this.props.actions.getMovies();
  }

  renderMoviesList() {
    const { moviesList } = this.props
    return (
        <div className="container">
          <div className="column">
            <div className="title is-4 canal-plus-title">MOVIES ON CANAL +</div>
            <hr />
          </div>
          <div className="columns is-multiline">
            {moviesList.map((movie) => (
                <Movie movie={movie} key={movie.id}/>
            ))}
          </div>
        </div>
    );
  }

  render() {
    const { isLoaded } = this.props
    if (!isLoaded) return <Loader />
    return this.renderMoviesList()
  }
}

MoviesList.propTypes = {
  moviesList: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    moviesList: state.movies.data,
    isLoaded: state.movies.isLoaded
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MoviesList);
