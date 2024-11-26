import React, { useState } from "react";

const DestinationInput: React.FC = () => {
    const predefinedOptions = [
        "Ciudad de México",
        "Bogotá",
        "Lima",
        "Buenos Aires",
        "Madrid",
        "Nueva York",
    ];

    const [origin, setOrigin] = useState("");
    const [filteredOriginOptions, setFilteredOriginOptions] = useState(predefinedOptions);
    const [showOriginOptions, setShowOriginOptions] = useState(false);

    const [destination, setDestination] = useState("");
    const [filteredDestinationOptions, setFilteredDestinationOptions] = useState(predefinedOptions);
    const [showDestinationOptions, setShowDestinationOptions] = useState(false);


    const handleFilterOptions = (
        value: string,
        setFiltered: React.Dispatch<React.SetStateAction<string[]>>
    ) => {
        setFiltered(
            predefinedOptions.filter((option) =>
                option.toLowerCase().includes(value.toLowerCase())
            )
        );
    };

    const handleValidation = (
        value: string,
        setValue: React.Dispatch<React.SetStateAction<string>>
    ) => {
        if (!predefinedOptions.includes(value)) {
            setValue("");
        }
    };


    return (
        <div className="w-full px-1">
            <br />
            <div className="flex flex-col md:flex-row min-w-[130px]">
                <div className="w-items-center mx-1 py-1 relative">
                    <input
                        type="text"
                        value={origin}
                        onChange={(e) => {
                            setOrigin(e.target.value);
                            handleFilterOptions(e.target.value, setFilteredOriginOptions);
                            setShowOriginOptions(true);
                        }}
                        onBlur={() => {
                            handleValidation(origin, setOrigin);
                            setShowOriginOptions(false);
                        }}
                        onFocus={() => setShowOriginOptions(true)}
                        placeholder="Origen"
                        className="w-full py-3 px-4 border border-gray-300 rounded-lg text-sm shadow-sm
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out
                        placeholder-gray-400"
                    />
                    {showOriginOptions && (
                        <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-lg shadow-md z-10">
                            {filteredOriginOptions.length > 0 ? (
                                filteredOriginOptions.map((option) => (
                                    <li
                                        key={option}
                                        className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                                        onMouseDown={() => setOrigin(option)}
                                    >
                                        {option}
                                    </li>
                                ))
                            ) : (
                                <li className="py-2 px-4 text-gray-500 cursor-default">
                                    Sin coincidencias
                                </li>
                            )}
                        </ul>
                    )}
                </div>

                <div className="w-items-center mx-1 py-1 relative">
                    <input
                        type="text"
                        value={destination}
                        onChange={(e) => {
                            setDestination(e.target.value);
                            handleFilterOptions(e.target.value, setFilteredDestinationOptions);
                            setShowDestinationOptions(true);
                        }}
                        onBlur={() => {
                            handleValidation(destination, setDestination);
                            setShowDestinationOptions(false);
                        }}
                        onFocus={() => setShowDestinationOptions(true)} 
                        placeholder="Destino"
                        className="w-full py-3 px-4 border border-gray-300 rounded-lg text-sm shadow-sm
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out
                        placeholder-gray-400"
                    />
                    {showDestinationOptions && (
                        <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-lg shadow-md z-10">
                            {filteredDestinationOptions.length > 0 ? (
                                filteredDestinationOptions.map((option) => (
                                    <li
                                        key={option}
                                        className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                                        onMouseDown={() => setDestination(option)}
                                    >
                                        {option}
                                    </li>
                                ))
                            ) : (
                                <li className="py-2 px-4 text-gray-500 cursor-default">
                                    Sin coincidencias
                                </li>
                            )}
                        </ul>
                    )}
                </div>
            </div>

        </div>

    );
};

export default DestinationInput;