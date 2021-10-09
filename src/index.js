import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { App } from './App'
import './index.css'
import { store } from './store/store'

let app = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDom.render(app, document.querySelector('#app'))
