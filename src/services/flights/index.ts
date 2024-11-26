import axios from '@libs/axios'

export const getAllFlights = async () => {
  return await axios.get('/v1/vuelo')
}
