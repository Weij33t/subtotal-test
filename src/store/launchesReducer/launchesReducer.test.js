// @ts-nocheck
import { launchesReducer } from './launchesReducer'

import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

function successFetch() {
  return {
    type: 'FETCH_LAUNCHES_SUCCESS',
  }
}

function fetchData() {
  return (dispatch) => {
    return Promise.resolve().then(() => dispatch(successFetch()))
  }
}

describe('launchesReducer', () => {
  it('should return correct action', () => {
    const store = mockStore({})

    // Return the promise
    return store.dispatch(fetchData()).then(() => {
      const actions = store.getActions()
      expect(actions[0]).toEqual(successFetch())
    })
  })
  it('should add item to state.launches', () => {
    const TEST_DATA = {
      data: [
        {
          name: 'Name',
          date: 'Date',
          desc: 'Desc',
          rocketImage: 'URL',
        },
      ],
    }

    const TEST_TYPE = 'FETCH_LAUNCHES_SUCCESS'
    const action = { type: TEST_TYPE, payload: TEST_DATA }

    const state = launchesReducer(undefined, action)

    expect(state.launches.length).toBe(1)
  })
})
