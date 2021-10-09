import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { launchesReducer } from './launchesReducer'

export const store = createStore(launchesReducer, applyMiddleware(thunk))
