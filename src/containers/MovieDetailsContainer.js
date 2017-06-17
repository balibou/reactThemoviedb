import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Loader from '../components/Loader';
import * as actions from '../actions';
import MovieDetails from '../components/MovieDetails';
import NotFound from '../components/NotFound';

class MovieDetailsContainer extends Component {
  componentDidMount() {
    this.props.actions.getMovie(this.props.params.id);
  }

  componentWillUnmount() {
    this.props.actions.removeMovie();
  }

  renderMovieDescription() {
    return (
      <div>
        <MovieDetails movie={this.props.movie} />
      </div>
    );
  }

  render() {
    const { isLoaded, error } = this.props;
    if (!isLoaded && error) return <NotFound error='movie'/>;
    if (!isLoaded) return <Loader />;
    return this.renderMovieDescription();
  }
}

MovieDetailsContainer.propTypes = {
  isLoaded: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    movie: state.movie.data,
    isLoaded: state.movie.isLoaded,
    error: state.movie.error
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
)(MovieDetailsContainer);
