
import React from 'react'

const Promotions: React.FC = () => {
    return (
        <div className="promotions relative bg-gray-50 p-4 rounded-md shadow-md text-center overflow-hidden">

            <div className="absolute top-0 left-0 w-[57%] h-full bg-cover bg-center z-0"
                style={{
                    backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0.5) 1%, rgba(0, 0, 0, 0) 100%), url('/src/assets/imagePromotions.jpg')`,
                    clipPath: "polygon(0% 0%, 88% 0%, 100% 100%, 0% 100%, 0% 0%)",
                }}
            ></div>

            <div className="flex flex-col md:flex-row justify-end space-x-1 py-1">
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

            <div className="flex justify-end items-center relative z-20">
                <button onClick={() => alert('Ofertas desbloqueadas')}
                    className="text-orange-600 text-xs border border-orange-600 py-2 px-1 rounded-lg font-bold uppercase tracking-wide shadow-lg hover:bg-orange-600 hover:shadow-md hover:text-white hover:border-white active:scale-95 transition-transform flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3 mx-1 hover:text-white">
                        <path d="M9.375 3a1.875 1.875 0 0 0 0 3.75h1.875v4.5H3.375A1.875 1.875 0 0 1 1.5 9.375v-.75c0-1.036.84-1.875 1.875-1.875h3.193A3.375 3.375 0 0 1 12 2.753a3.375 3.375 0 0 1 5.432 3.997h3.943c1.035 0 1.875.84 1.875 1.875v.75c0 1.036-.84 1.875-1.875 1.875H12.75v-4.5h1.875a1.875 1.875 0 1 0-1.875-1.875V6.75h-1.5V4.875C11.25 3.839 10.41 3 9.375 3ZM11.25 12.75H3v6.75a2.25 2.25 0 0 0 2.25 2.25h6v-9ZM12.75 12.75v9h6.75a2.25 2.25 0 0 0 2.25-2.25v-6.75h-9Z" />
                    </svg>
                    Desbloquear ofertas
                </button>
            </div>

            <div className="flex flex-col md:flex-row justify-end space-x-1 py-2">
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
