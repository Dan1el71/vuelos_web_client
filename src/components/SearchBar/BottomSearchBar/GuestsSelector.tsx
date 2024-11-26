import React, { useState } from "react";

const GuestsSelector: React.FC = () => {
  const [adults, setAdults] = useState(1);
  const [youth, setYouth] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const increment = (setter: React.Dispatch<React.SetStateAction<number>>) => {
    setter((prev) => prev + 1);
  };

  const decrement = (
    setter: React.Dispatch<React.SetStateAction<number>>,
    min: number
  ) => {
    setter((prev) => (prev > min ? prev - 1 : prev));
  };

  return (
    <div className="rounded-xl relative w-40 justify-between md:w-1/3 py-2">
      <label htmlFor="check-in" className="w-full block text-sm font-medium text-gray-700 mb-1">
          ¿Quiénes vuelan?
        </label>
      <button
        onClick={toggleDropdown}
        className="mx-2 md:w-auto flex items-center justify-between py-2 pr-2 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
        <span className="w-24 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm text-gray-500">
          {adults + youth + children + infants}{" "}
          {adults + youth + children + infants === 1 ? "Pasajero" : "Pasajeros"}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-4 transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
        </svg>
      </button>

        {isOpen && (
        <div className="absolute top-full mt-2 right-0 md:left-auto md:w-80 bg-white border border-gray-300 rounded-lg shadow-lg z-50 overflow-hidden">
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              ¿Quiénes vuelan?
            </h3>

            <div className="flex justify-between items-center py-2">
              <div>
                <p className="text-sm font-medium text-gray-800">Adultos</p>
                <p className="text-xs text-gray-500">Desde 15 años</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => decrement(setAdults, 1)}
                  className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  -
                </button>
                <span className="text-sm font-semibold">{adults}</span>
                <button
                  onClick={() => increment(setAdults)}
                  className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  +
                </button>
              </div>
            </div>

            <div className="flex justify-between items-center py-2">
              <div>
                <p className="text-sm font-medium text-gray-800">Jóvenes</p>
                <p className="text-xs text-gray-500">De 12 a 14 años</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => decrement(setYouth, 0)}
                  className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  -
                </button>
                <span className="text-sm font-semibold">{youth}</span>
                <button
                  onClick={() => increment(setYouth)}
                  className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  +
                </button>
              </div>
            </div>

            <div className="flex justify-between items-center py-2">
              <div>
                <p className="text-sm font-medium text-gray-800">Niños</p>
                <p className="text-xs text-gray-500">De 2 a 11 años</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => decrement(setChildren, 0)}
                  className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  -
                </button>
                <span className="text-sm font-semibold">{children}</span>
                <button
                  onClick={() => increment(setChildren)}
                  className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  +
                </button>
              </div>
            </div>

            <div className="flex justify-between items-center py-2">
              <div>
                <p className="text-sm font-medium text-gray-800">Bebés</p>
                <p className="text-xs text-gray-500">Menores de 2 años</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => decrement(setInfants, 0)}
                  className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  -
                </button>
                <span className="text-sm font-semibold">{infants}</span>
                <button
                  onClick={() => increment(setInfants)}
                  className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  +
                </button>
              </div>
            </div>

            {/* Botón Confirmar */}
            <button
              onClick={toggleDropdown}
              className="mt-4 w-full py-2 px-4 bg-black text-white font-medium rounded-lg shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Confirmar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GuestsSelector;
