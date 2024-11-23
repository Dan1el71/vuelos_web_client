import React from "react";

const LinksMenu: React.FC = () => {
  return (
    <div className="flex items-center gap-4 py-1">
      <a
        href="/aerolineas"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-full text-sm font-medium text-gray-700 shadow-md hover:bg-blue-100 hover:text-blue-600 transition-all duration-200"
      >
        Aerolíneas
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
        </svg>
      </a>

      <a
        href="/todos-los-vuelos"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-full text-sm font-medium text-gray-700 shadow-md hover:bg-blue-100 hover:text-blue-600 transition-all duration-200"
      >
        Todos los vuelos
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
        </svg>
      </a>
    </div >
  );
};

export default LinksMenu;
