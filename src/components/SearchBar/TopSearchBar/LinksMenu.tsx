import React from "react";
import { Link } from "react-router-dom";

const LinksMenu: React.FC = () => {
    return (
      <div className="flex items-center gap-4 py-1">
        <Link
          to="aerolineas"
          className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-full text-sm font-medium text-gray-700 shadow-md hover:bg-blue-100 hover:text-blue-600 transition-all duration-200"
        >
          Aerolíneas
          <i className="bi bi-arrow-up-right"></i>
        </Link>

        <Link
          to="vuelos"
          className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-full text-sm font-medium text-gray-700 shadow-md hover:bg-blue-100 hover:text-blue-600 transition-all duration-200"
        >
          Todos los vuelos
          <i className="bi bi-arrow-up-right"></i>
        </Link>
      </div>
    )
};

export default LinksMenu;
