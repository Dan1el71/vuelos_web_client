import { Airline } from "@hooks/useAirlines"

const AirlineCard: React.FC<{ airline: Airline }> = ({ airline }) => (
  <div className="border border-gray-300 rounded-lg p-6 hover:shadow-xl transition-all transform hover:scale-105 bg-gradient-to-t from-sky-400 bg-blue-500">
    <h3 className="text-xl font-bold mb-3 text-white">{airline.nombre}</h3>
    <p className="text-sm text-white">
      <span className="font-semibold">Código de aerolinea:</span>{' '}
      {airline.codigoAerolinea}
    </p>
    <p className="text-sm text-white">
      <span className="font-semibold">País:</span> {airline.paisOrigen}
    </p>
  </div>
)

export default AirlineCard
