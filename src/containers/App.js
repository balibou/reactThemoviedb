import React from 'react';
import {Link} from 'react-router';

import logo from '../Canal+.svg'
import '../styles/App.css';

const App = ({ children }) => (
  <div className="App">
    <nav className="nav has-shadow" id="top" style={{background: '#000000'}}>
      <div className="container">
        <div className="nav-left">
          <Link to={'/'}>
          <a className="nav-item">
            <img src={logo} alt="Canal plus logo" />
          </a>
        </Link>
        </div>
        <span className="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div className="nav-right nav-menu">
          <a className="nav-item is-tab is-active">
            Home
          </a>
          <a className="nav-item is-tab">
            Features
          </a>
          <a className="nav-item is-tab">
            Team
          </a>
          <a className="nav-item is-tab">
            Help
          </a>
        </div>
      </div>
    </nav>
    <div>
      { children }
    </div>
  </div>
)

export default App;
