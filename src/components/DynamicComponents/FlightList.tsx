import React, { useEffect, useState } from 'react';
/*import axios from 'axios';*/

interface Flight {
  id: number;
  origin: string;
  destination: string;
  date: string;
  capacity: number;
  airline: string;
  logo: string;
}

const FlightList: React.FC = () => {
  const [flights, setFlights] = useState<Flight[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    /*
    const fetchFlights = async () => {
      try {
        const response = await axios.get('/api/v1/vuelo');
        setFlights(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error al cargar los vuelos.');
        setLoading(false);
      }
    };

    fetchFlights();
    */
    
    // Ejemplo de vuelos
    const exampleFlights: Flight[] = [
      {
        id: 1,
        origin: 'Bogotá',
        destination: 'Medellín',
        date: '2024-12-01',
        capacity: 180,
        airline: 'Avianca',
        logo: 'src/assets/aviancaLogo.png',
      },
      {
        id: 2,
        origin: 'Miami',
        destination: 'Nueva York',
        date: '2024-12-02',
        capacity: 220,
        airline: 'American Airlines',
        logo: 'src/assets/americanAirlines.png', 
      },
      {
        id: 3,
        origin: 'Ciudad de México',
        destination: 'Cancún',
        date: '2024-12-05',
        capacity: 150,
        airline: 'Aeroméxico',
        logo: 'src/assets/aeromexicoLogo.png',
      },
    ];
    
    setTimeout(() => {
      setFlights(exampleFlights);
      setLoading(false);
    }, 1);

  }, []);

  if (loading) return <p className="text-center text-gray-500">Cargando vuelos...</p>;
  if (error) return <p className="text-center text-gray-500">{error}</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 bg-white rounded-lg shadow-lg">
      {flights.map((flight) => (
        <div
          key={flight.id}
          className="border border-gray-300 rounded-lg p-6 hover:shadow-xl transition-all transform hover:scale-105 bg-gradient-to-t from-sky-400 bg-sky-200"
        >
          <div className="flex items-center mb-4 space-x-4">
            <img
              src={flight.logo}
              alt={`${flight.airline} logo`}
              className="w-16 h-16 object-contain rounded-full"
            />
            <div>
              <h3 className="text-lg font-semibold text-white">{flight.airline}</h3>
              <p className="text-sm text-white">
                <span className="font-semibold">Capacidad:</span> {flight.capacity} pasajeros
              </p>
            </div>
          </div>
          <p className="text-sm text-white">
            <span className="font-semibold">Origen:</span> {flight.origin}
          </p>
          <p className="text-sm text-white">
            <span className="font-semibold">Destino:</span> {flight.destination}
          </p>
          <p className="text-sm text-white">
            <span className="font-semibold">Fecha:</span> {flight.date}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FlightList;
