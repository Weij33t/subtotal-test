import { launchesApi } from './../../api/launchesApi'

const initialState = {
  launches: [],
  totalPages: 0,
  currentPage: 1,
  order: { desc: 'Сначала новые', value: 'desc' },
  error: null,
}

const FETCH_LAUNCHES_SUCCESS = 'FETCH_LAUNCHES_SUCCESS'
const FETCH_LAUNCHES_FAIL = 'FETCH_LAUNCHES_FAIL'

export const launchesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LAUNCHES_SUCCESS:
      return {
        ...state,
        launches: action.payload.data,
        totalPages: action.payload.totalPages,
        currentPage: action.payload.currentPage,
        order: action.payload.order,
      }
    case FETCH_LAUNCHES_FAIL:
      return { ...state, error: 'Ошибка при загрузке данных' }
    default:
      return state
  }
}

export const fetchLaunches =
  (page = 1, order = 'asc') =>
  async (dispatch) => {
    try {
      const data = await launchesApi.getLaunches(page, order.value)
      const launches = data.launches
      const totalPages = data.totalPages
      const currentPage = data.currentPage
      dispatch(
        fetchLaunchesSuccess(
          await Promise.all(launches),
          totalPages,
          currentPage,
          order
        )
      )
    } catch (error) {
      console.log(error)
      dispatch(fetchLaunchesFail())
    }
  }
export function fetchLaunchesFail() {
  return { type: FETCH_LAUNCHES_FAIL }
}

export function fetchLaunchesSuccess(data, totalPages, currentPage, order) {
  return {
    type: FETCH_LAUNCHES_SUCCESS,
    payload: { data, totalPages, currentPage, order },
  }
}
