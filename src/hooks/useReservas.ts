import { getReservas } from '@services/reservas'
import { AxiosError } from 'axios'
import { useEffect, useState } from 'react'

export type Reserva = {
  id: number
  fecha: string
  hora: string
  nombre: string
  telefono: string
}

const useReservas = () => {
  const [reservas, setReservas] = useState<Reserva[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchReservas = async () => {
      setLoading(true)
      try {
        const { data } = await getReservas(1)

        setReservas(data)
      } catch (err) {
        if (err instanceof AxiosError && err.response?.status === 404) {
          setError('No tienes reservas guardadas')
        } else {
          setError('Ocurrió un error al cargar las reservas')
        }
      } finally {
        setLoading(false)
      }
    }
    fetchReservas()
  }, [])

  return {
    reservas,
    loading,
    error,
  }
}

export default useReservas
