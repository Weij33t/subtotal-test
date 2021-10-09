import { launchesQuery, URLS } from './constants'

export const launchesApi = {
  async getLaunches(page = 1, order = 'desc') {
    try {
      const fetchUrl = new URL(URLS.API_URL)
      fetchUrl.pathname += '/launches/query'

      launchesQuery.options.page = page
      launchesQuery.options.sort.date_utc = order

      const response = await fetch(fetchUrl.toString(), {
        method: 'POST',
        body: JSON.stringify(launchesQuery),
        headers: { 'Content-Type': 'application/json' },
      })

      const data = await response.json()
      const launches = data.docs.map(async (doc) => ({
        name: doc.name,
        date: doc.date_utc,
        desc: doc.details,
        rocketImage: await this.getRocketImage(doc.rocket),
      }))
      console.log(data)
      return { totalPages: data.totalPages, currentPage: data.page, launches }
    } catch (e) {
      console.log(e)
    }
  },
  async getRocketImage(rocketId) {
    try {
      const fetchUrl = new URL(URLS.API_URL)
      fetchUrl.pathname += `/rockets/${rocketId}`
      const response = await fetch(fetchUrl.toString())
      const rocket = await response.json()
      return rocket.flickr_images[0]
    } catch (e) {
      console.log(e)
    }
  },
}
