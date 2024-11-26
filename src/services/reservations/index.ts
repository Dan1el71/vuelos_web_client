import axios from '@libs/axios'

export const getUserReservations = async (userId: number) => {
  return await axios.get('/reservations/' + userId)
}

export const getAllReservations = async () => {
  return await axios.get('/reservations')
}
