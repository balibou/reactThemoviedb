import React from 'react';
import {Link} from 'react-router';

import canalPlusLogo from '../styles/canalPlusLogo.svg';
import myCanalLogo from '../styles/myCanalLogo.png';
import { myCanalUrl } from '../utils/config';
import '../styles/App.css';

function NavBar ({ location }) {
  return (
    <nav className="nav has-shadow" id="top" style={{background: '#000000'}}>
      <div className="container">
        <div className="nav-left">
          <Link className="nav-item" to={'/'}>
            <img src={canalPlusLogo} alt="Canal plus logo" />
          </Link>
        </div>
        <span className="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div id='nav-menu' className="nav-right nav-menu">
          <Link
            className={`nav-item is-tab ${location.pathname === '/' ? 'is-active' : ''}`}
            to={'/'}
            style={{color: '#FFFFFF'}}>
              Movies
          </Link>
          <a className="nav-item is-tab" href={myCanalUrl}>
            <img src={myCanalLogo} alt="My Canal logo" />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
