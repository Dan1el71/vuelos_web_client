import axios from '@libs/axios'

export const getAllAirlines = async () => {
  return await axios.get('/v1/aerolineas')
}
