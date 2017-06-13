import React, { Component } from 'react';

class MovieDescription extends Component {
  render() {
    const { original_title, id, backdrop_path, vote_count, overview, release_date, homepage, budget } = this.props.movie
    const backdropPoster = `https://image.tmdb.org/t/p/w500${backdrop_path}`

    return (
      <div key={id}>
        <div className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-6">
                <div className="image is-2by2">
                  <img src={backdropPoster} alt="test" />
                </div>
              </div>
              <div className="column is-5 is-offset-1">
                <div className="title is-2">{original_title}</div>
                <hr />
                <br />
                <p>
                  <i className="fa fa-star title is-5" style={{color: "#ed6c63"}} />
                  <i className="fa fa-star title is-5" style={{color: "#ed6c63"}} />
                  <i className="fa fa-star-half-empty title is-5" style={{color: "#ed6c63"}} />
                  <i className="fa fa-star title is-5" />
                  <i className="fa fa-star title is-5" />
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
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MovieDescription;
