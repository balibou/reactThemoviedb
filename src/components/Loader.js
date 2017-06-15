import React from 'react';
import Spinner from 'react-spinkit';

function Loader () {
  return (
    <div className="section">
      <div className="container">
        <div className="column is-offset-6">
          <Spinner name="ball-spin-fade-loader" fadeIn='none'/>
        </div>
      </div>
    </div>
  )
}

export default Loader;
