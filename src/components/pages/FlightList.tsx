import useFlights from '@hooks/useFlights'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const FlightList = () => {
  const { allFlights: flights, error, loading } = useFlights()
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  if (loading)
    return <p className="text-center text-gray-500">Cargando vuelos...</p>
  if (error) return <p className="text-center text-gray-500">{error}</p>

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentFlights = flights.slice(startIndex, endIndex)
  const totalPages = Math.ceil(flights.length / itemsPerPage)

  if (flights.length === 0)
    return (
      <p className="text-center text-gray-500">No hay vuelos disponibles</p>
    )

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg min-h-screen">
      <div className="flex  justify-end">
        <Link viewTransition to={'/'} className="mx-4 mb-4">
          <button className="text-white text-sm font-medium border-red-600 border px-3 py-[6px] bg-red-600 rounded-md hover:bg-red-700">
            Volver
          </button>
        </Link>
      </div>
      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead className="bg-sky-400 text-white">
          <tr>
            <th className="border border-gray-300 px-4 py-2">Origen</th>
            <th className="border border-gray-300 px-4 py-2">Destino</th>
            <th className="border border-gray-300 px-4 py-2">Fecha</th>
            <th className="border border-gray-300 px-4 py-2">Hora</th>
          </tr>
        </thead>
        <tbody>
          {currentFlights.map((flight) => (
            <tr key={flight.id} className="hover:bg-sky-100 transition-colors">
              <td className="border border-gray-300 px-4 py-2 text-center">
                {flight.origen}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {flight.destino}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {flight.fechaSalida}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {flight.horaSalida}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Paginación */}
      <div className="flex justify-center items-center mt-4 space-x-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className={`px-4 py-2 bg-gray-300 text-gray-700 rounded ${
            currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        <p className="text-gray-700">
          Página {currentPage} de {totalPages}
        </p>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          className={`px-4 py-2 bg-gray-300 text-gray-700 rounded ${
            currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={currentPage === totalPages}
        >
          Siguiente
        </button>
      </div>
    </div>
  )
}

export default FlightList
