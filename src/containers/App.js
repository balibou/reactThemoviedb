import React from 'react';
import logo from '../styles/logo.svg';
import '../styles/App.css';

const App = ({ children }) => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
    <div>
      { children }
    </div>
  </div>
)

export default App;
