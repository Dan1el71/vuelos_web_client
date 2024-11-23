import React from "react";

interface TripTypeSelectorProps {
    tripType: "roundtrip" | "oneway";
    onChange: (type: "roundtrip" | "oneway") => void;
}

const TripTypeSelector: React.FC<TripTypeSelectorProps> = ({ tripType, onChange }) => {
    return (
        <div className="flex items-end gap-6 py-1">
            <label className="flex items-end space-x-2">
                <input
                    type="radio"
                    name="tripType"
                    value="roundtrip"
                    checked={tripType === "roundtrip"}
                    onChange={() => onChange("roundtrip")}
                    className="accent-blue-500 w-5 h-5"
                />
                <span className="text-sm font-medium text-gray-700">Ida y vuelta</span>
            </label>
            <label className="flex items-end space-x-2">
                <input
                    type="radio"
                    name="tripType"
                    value="oneway"
                    checked={tripType === "oneway"}
                    onChange={() => onChange("oneway")}
                    className="accent-blue-500 w-5 h-5"
                />
                <span className="text-sm font-medium text-gray-700">Solo ida</span>
            </label>
        </div>
    );
};

export default TripTypeSelector;