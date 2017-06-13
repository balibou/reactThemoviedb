import { createStore, applyMiddleware, compose } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk'

import rootReducer from '../reducers'

const initialState = {}
const middleware = [thunk]
const store = createStore(rootReducer, initialState, compose(applyMiddleware(...middleware)))

export const history = syncHistoryWithStore(browserHistory, store);

export default store
