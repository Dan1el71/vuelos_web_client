import React from "react";

const DatePicker: React.FC = () => {
    return (
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-2 md:w-1/2">
            <div className="w-full">
                <label htmlFor="check-in" className="mx-2 block text-sm font-medium text-gray-700 mb-1">
                    Fecha de entrada
                </label>
                <input
                    id="check-in"
                    type="date"
                    className="uppercase w-full py-2 px-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm text-gray-500"/>
            </div>

            <div className="w-full">
                <label htmlFor="check-out" className="mx-2 block text-sm font-medium text-gray-700 mb-1">
                    Fecha de salida
                </label>
                <input
                    id="check-out"
                    type="date"
                    className="uppercase gap-4 w-full py-2 px-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm text-gray-500"/>
            </div>
        </div>
    );
};

export default DatePicker;