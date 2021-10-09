export const URLS = { API_URL: 'https://api.spacexdata.com/v4' }

export const launchesQuery = {
  query: {
    date_utc: {
      $gte: '2015-01-01T00:00:00.000Z',
      $lte: '2019-01-01T00:00:00.000Z',
    },
  },
  options: { limit: 12, sort: { date_utc: 'asc' } },
}
