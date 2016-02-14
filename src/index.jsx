import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer'
import * as action_creators from './action_creators'
import App from './components/App'

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render((
  <Provider store={store}>
    <App {...store.getState()} {...action_creators} />
  </Provider>
  ), document.getElementById('app')
)
