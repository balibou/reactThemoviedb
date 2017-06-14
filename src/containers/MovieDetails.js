import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../actions';
import MovieDescription from '../components/MovieDescription'

class MovieDetails extends Component {
  componentDidMount() {
    this.props.actions.getMovie(this.props.params.id);
  }

  componentWillUnmount() {
    this.props.actions.removeMovie()
  }

  renderMovieDescription() {
    const { movie } = this.props
    return (
      <div>
        <MovieDescription movie={movie} />
      </div>
    )
  }

  render() {
    const { isLoaded } = this.props
    if (!isLoaded) return <div>spinner</div>
    return this.renderMovieDescription()
  }
}

function mapStateToProps(state) {
  return {
    movie: state.movie.data,
    isLoaded: state.movie.isLoaded
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
)(MovieDetails);
