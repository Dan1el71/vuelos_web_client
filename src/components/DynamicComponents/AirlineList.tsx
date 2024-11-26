import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Airline {
  code: string;
  name: string;
  country: string;
}

const AirlineList: React.FC = () => {
  const [airlines, setAirlines] = useState<Airline[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAirlines = async () => {
      try {
        const response = await axios.get('/api/v1/aerolineas');
        setAirlines(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error al cargar las aerolíneas.');
        setLoading(false);
      }
    };

    fetchAirlines();
  }, []);

  if (loading) return <p className="text-center text-gray-500">Cargando aerolíneas...</p>;
  if (error) return <p className="text-center text-gray-500">{error}</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 bg-white rounded-lg shadow-lg">
      {airlines.map((airline) => (
        <div
          key={airline.code}
          className="border border-gray-300 rounded-lg p-6 hover:shadow-xl transition-all transform hover:scale-105 bg-gradient-to-t from-sky-400 bg-blue-500"
        >
          <h3 className="text-xl font-bold mb-3 text-white">{airline.name}</h3>
          <p className="text-sm text-white">
            <span className="font-semibold">Código:</span> {airline.code}
          </p>
          <p className="text-sm text-white">
            <span className="font-semibold">País:</span> {airline.country}
          </p>
        </div>
      ))}
    </div>
  );
};

export default AirlineList;
