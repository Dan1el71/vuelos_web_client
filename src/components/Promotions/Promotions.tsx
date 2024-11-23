
import React from 'react'

const Promotions: React.FC = () => {
    return (
        <div className="promotions relative bg-gray-50 p-4 rounded-md shadow-md text-center overflow-hidden">

            <div className="flex flex-col md:flex-row justify-center space-x-1 py-1">
                <h2 className="flex justify-end font-semibold text-gray-700 relative">
                    Consigue
                </h2>
                <h2 className="flex justify-end font-semibold text-gray-700 relative">
                    ofertas
                </h2>
                <h2 className="flex justify-end font-semibold text-gray-700 relative">
                    especiales
                </h2>
            </div>

            <div className="flex justify-center items-center relative z-20">
                <button onClick={() => alert('Ofertas desbloqueadas')}
                    className="text-orange-600 text-xs border border-orange-600 py-2 px-1 rounded-lg font-bold uppercase tracking-wide shadow-lg hover:bg-orange-600 hover:shadow-md hover:text-white hover:border-white active:scale-95 transition-transform flex items-center">
                    Desbloquear ofertas
                </button>
            </div>

            <div className="flex flex-col md:flex-row justify-center space-x-1 py-2">
                <p className="flex text-xs justify-end text-gray-700 relative">
                    Ingresa el código
                </p>
                <p className="flex text-xs justify-end text-gray-700 relative">
                    de tu viaje y
                </p>
                <p className="flex text-xs justify-end text-gray-700 relative">
                    tendrás premios
                    {/*Ahorra un <span className="font-bold">15%</span> con las Ofertas de finales de año */}
                </p>
            </div>

        </div>
    );
}
export default Promotions
