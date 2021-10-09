export const formatDate = (date) => new Date(date).toDateString()

export const formatDesc = (desc) =>
  desc?.slice(0, 250) ? desc?.slice(0, 230) + '...' : ''
