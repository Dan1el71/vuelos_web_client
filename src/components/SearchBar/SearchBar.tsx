import React, { useState } from 'react';
import DestinationInput from './BottomSearchBar/DestinationInput';
import DatePicker from './BottomSearchBar/DatePicker';
import GuestsSelector from './BottomSearchBar/GuestsSelector';
import SearchButton from './BottomSearchBar/SearchButton';
import TripTypeSelector from './TopSearchBar/TripTypeSelector';
import LinksMenu from './TopSearchBar/LinksMenu';

interface SearchBarProps {
  onTabChange: (tab: 'airlines' | 'flights' | null) => void;
  activeTab: 'airlines' | 'flights' | null;
}

const SearchBar: React.FC<SearchBarProps> = ({ onTabChange, activeTab }) => {
  const [tripType, setTripType] = useState<'roundtrip' | 'oneway'>('roundtrip');

  return (
    <section className="rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row items-center justify-between px-5">
        <TripTypeSelector tripType={tripType} onChange={setTripType} />
        <LinksMenu
          links={[
            { label: 'Aerolíneas', action: () => onTabChange('airlines') },
            { label: 'Todos los vuelos', action: () => onTabChange('flights') },
          ]}
        />
      </div>

      {activeTab === null || activeTab === 'airlines' || activeTab === 'flights' ? (
        <div className="rounded-lg bg-gradient-to-t from-sky-200 to-cyan-50 flex flex-col md:flex-row items-center justify-between px-5 mt-4 py-4">
          <DestinationInput />
          <DatePicker label="Fecha de entrada" id="check-in" />
          {tripType === 'roundtrip' && (
            <DatePicker label="Fecha de salida" id="check-out" />
          )}
          <GuestsSelector />
          <SearchButton />
        </div>
      ) : null}
    </section>
  );
};

export default SearchBar;
