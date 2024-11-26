import useReservas from '@hooks/useReservas'
import { Link } from 'react-router-dom'

const Reservas = () => {
  const { reservas: data, error, loading } = useReservas()

  if (loading)
    return <p className="text-center text-gray-500">Cargando tus reservas...</p>
  if (error)
    return (
      <div className="flex items-center flex-col">
        <p className="text-gray-500">{error}</p>
        <Link viewTransition to={'/'} className="mx-4 my-2  mb-4">
          <button className="text-white text-sm font-medium border-red-600 border px-3 py-[6px] bg-red-600 rounded-md hover:bg-red-700">
            Volver
          </button>
        </Link>
      </div>
    )

  if (data.length === 0)
    return (
      <p className="text-center text-gray-500">No tienes ninguna reserva</p>
    )

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg min-h-screen">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">
        Tus reservas
      </h1>
      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead className="bg-sky-400 text-white">
          <tr>
            <th className="border border-gray-300 px-4 py-2">Fecha</th>
            <th className="border border-gray-300 px-4 py-2">Hora</th>
            <th className="border border-gray-300 px-4 py-2">Nombre</th>
            <th className="border border-gray-300 px-4 py-2">Teléfono</th>
          </tr>
        </thead>
        <tbody>
          {data.map((reserva) => (
            <tr key={reserva.id} className="hover:bg-sky-100 transition-colors">
              <td className="border border-gray-300 px-4 py-2 text-center">
                {reserva.fecha}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {reserva.hora}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {reserva.nombre}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {reserva.telefono}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Reservas
