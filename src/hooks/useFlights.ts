import { getAllFlights } from '@services/flights'
import { AxiosError } from 'axios'
import { useEffect, useState } from 'react'

export type Flight = {
  id: number
  origen: string
  destino: string
  horaSalida: number
  fechaSalida: string
  duracion: string
  capacidad: number
}

const useFlights = () => {
  const [allFlights, setAllFlights] = useState<Flight[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadFlights = async () => {
      try {
        setLoading(true)
        const { status, data } = await getAllFlights()

        if (status === 200 && Array.isArray(data)) setAllFlights(data)
        else setError('Error al cargar los vuelos.')
      } catch (err) {
        if ((err as AxiosError)?.response?.status === 404)
          setError('No se encontraron vuelos.')
        else setError('Error al cargar los vuelos.')
      } finally {
        setLoading(false)
      }
    }

    loadFlights()
  }, [])

  return {
    allFlights,
    loading,
    error,
  }
}

export default useFlights
