import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import 'bulma/css/bulma.css'
import 'font-awesome/css/font-awesome.css'

import registerServiceWorker from './registerServiceWorker';
import store, { history } from './store'
import App from './containers/App';
import MoviesListContainer from './containers/MoviesListContainer';
import MovieDetailsContainer from './containers/MovieDetailsContainer'
import NotFound from './components/NotFound'
import './styles/index.css';

const Root = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={MoviesListContainer}/>
        <Route path="/movie/:id" component={MovieDetailsContainer} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  </Provider>
);

ReactDOM.render(
  Root,
  document.getElementById('root'),
);
registerServiceWorker();
