import { createStore, applyMiddleware, compose } from 'redux'
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux'
import { createBrowserHistory, browserHistory } from 'history';
import thunk from 'redux-thunk'

import rootReducer from '../reducers'

const initialState = {}
const middleware = [thunk, routerMiddleware(browserHistory)]
const store = createStore(rootReducer, initialState, compose(applyMiddleware(...middleware)))

export const history = syncHistoryWithStore(createBrowserHistory(), store);

export default store
