import React from 'react';
import PropTypes from 'prop-types';

import '../styles/App.css';
import NavBar from '../components/NavBar';

function App({ children, location }) {
  return (
    <div className="App">
      <NavBar location={location} />
      { children }
    </div>
  );
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default App;
