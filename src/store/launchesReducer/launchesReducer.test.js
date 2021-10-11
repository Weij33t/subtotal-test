// @ts-nocheck
import {
  launchesReducer,
  fetchLaunches,
  fetchLaunchesFail,
} from './launchesReducer'

import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe('launchesReducer', () => {
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

    expect(state.launches[0]).toEqual({
      name: 'Name',
      date: 'Date',
      desc: 'Desc',
      rocketImage: 'URL',
    })
  })
})
