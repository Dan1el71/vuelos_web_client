import { getAllAirlines } from '@services/airlines'
import { useState, useEffect } from 'react'

export type Airline = {
  id: number
  nombre: string
  codigoAerolinea: string
  paisOrigen: string
}

const useAirlines = () => {
  const [airlines, setAirlines] = useState<Airline[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const convertCountryName = (airlines: Airline[]): Airline[] => {
    const regionNames = new Intl.DisplayNames(['es'], { type: 'region' })

    return airlines.map((airline) => ({
      ...airline,
      paisOrigen: regionNames.of(airline.paisOrigen) || airline.paisOrigen,
    }))
  }

  useEffect(() => {
    const loadAirlines = async () => {
      try {
        setLoading(true)
        const { status, data } = await getAllAirlines()

        if (status === 200 && Array.isArray(data)) {
          const airlines = convertCountryName(data)
          setAirlines(airlines)
        } else {
          throw new Error('Datos inválidos recibidos del servidor.')
        }
      } catch (err) {
        console.error(err)
        setError('Error al cargar las aerolíneas.')
      } finally {
        setLoading(false)
      }
    }

    loadAirlines()
  }, [])

  return { airlines, loading, error }
}

export default useAirlines
