import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import 'bulma/css/bulma.css'
import 'font-awesome/css/font-awesome.css'

import registerServiceWorker from './registerServiceWorker';
import store, { history } from './store'
import App from './containers/App';
import MoviesList from './components/MoviesList';
import MovieDetails from './containers/MovieDetails'
import './styles/index.css';

const Root = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={MoviesList}/>
        <Route path="/movie/:id" component={MovieDetails} />
      </Route>
    </Router>
  </Provider>
);

ReactDOM.render(
  Root,
  document.getElementById('root'),
);
registerServiceWorker();
