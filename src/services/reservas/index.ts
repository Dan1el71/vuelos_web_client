import axios from '@libs/axios'

export const getReservas = async (idCliente: number) => {
  return await axios.get('/v1/reserva/clienteId/' + idCliente)
}
