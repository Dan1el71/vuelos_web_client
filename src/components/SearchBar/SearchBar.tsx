import React, { useState } from 'react'
import DestinationInput from './BottomSearchBar/DestinationInput'
import DatePicker from './BottomSearchBar/DatePicker'
import GuestsSelector from './BottomSearchBar/GuestsSelector'
import SearchButton from './BottomSearchBar/SearchButton'
import TripTypeSelector from './TopSearchBar/TripTypeSelector'
import LinksMenu from './TopSearchBar/LinksMenu'

const SearchBar: React.FC = () => {
  const [tripType, setTripType] = useState<'roundtrip' | 'oneway'>('roundtrip')

  return (
    <section className="rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row items-center justify-between px-5">
        <TripTypeSelector tripType={tripType} onChange={setTripType} />
        <LinksMenu />
      </div>

      <div className="rounded-lg bg-gradient-to-t from-sky-200 to-cyan-50 flex flex-col md:flex-row items-center justify-between px-5 mt-4 py-4">
        <DestinationInput />
        <DatePicker label="Fecha de entrada" id="check-in" />
        {tripType === 'roundtrip' && (
          <DatePicker label="Fecha de salida" id="check-out" />
        )}
        <GuestsSelector />
        <SearchButton />
      </div>
    </section>
  )
}

export default SearchBar
