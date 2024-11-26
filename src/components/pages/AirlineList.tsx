import AirlineCard from '@components/AirlineCard'
import useAirlines from '@hooks/useAirlines'
import { Link } from 'react-router-dom'

const AirlineList = () => {
  const { airlines, loading, error } = useAirlines()

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-blue-500"></div>
      </div>
    )
  if (error) return <p className="text-center text-gray-500">{error}</p>

  return (
    <>
      <h1 className="text-center">
        <span className="text-2xl font-semibold text-gray-800 text-center">
          Nuestras Aerolineas
        </span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 bg-white rounded-lg shadow-lg min-h-screen">
        {airlines.map((airline) => (
          <AirlineCard key={airline.id} airline={airline} />
        ))}
      </div>
      <Link to={'/'} className="flex">
        <button className="bg-red-600 w-full py-2">
          <span className="text-2xl font-semibold text-center text-white">
            Volver
          </span>
        </button>
      </Link>
    </>
  )
}

export default AirlineList
