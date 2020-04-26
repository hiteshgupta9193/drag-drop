import React from 'react'
import ReactDOM from 'react-dom'
import App from './src/App'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import baseReducer from 'reducer'


const rootElement = document.getElementById('root')
const store = createStore(baseReducer)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
