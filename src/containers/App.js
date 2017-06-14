import React from 'react';
import {Link} from 'react-router';

import logo from '../Canal+.svg'
import myCanal from '../styles/mycanal.png'
import '../styles/App.css';

const App = ({ children, location }) => (
  <div className="App">
    <nav className="nav has-shadow" id="top" style={{background: '#000000'}}>
      <div className="container">
        <div className="nav-left">
          <Link className="nav-item" to={'/'}>
            <img src={logo} alt="Canal plus logo" />
          </Link>
        </div>
        <span className="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div id='nav-menu' className="nav-right nav-menu">
          <Link className={`nav-item is-tab ${location.pathname === '/' ? 'is-active' : ''}`} to={'/'}>
            Movies
          </Link>
          <a className="nav-item is-tab" href='https://www.mycanal.fr'>
            <img src={myCanal} alt="My Canal logo" />
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
