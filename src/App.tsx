import { useState } from 'react';
import Promotions from '@components/Promotions/Promotions';
import SearchBar from '@components/SearchBar/SearchBar';
import AppHeader from '@components/AppHeader';
import FlightList from '@components/DynamicComponents/FlightList';
import AirlineList from '@components/DynamicComponents/AirlineList';

function App() {
  const [selectedTab, setSelectedTab] = useState<'airlines' | 'flights' | null>(null);

  return (
    <>
      <AppHeader />

      <main className="mx-auto max-w-6xl p-6 space-y-12">
        <section aria-labelledby="search-bar">
          <SearchBar
            onTabChange={setSelectedTab} 
            activeTab={selectedTab} 
          />
        </section>

        {selectedTab === 'airlines' && (
          <section aria-labelledby="airlines">
            <h2 id="airlines" className="text-lg font-bold mb-4">Lista de Aerolíneas</h2>
            <AirlineList />
          </section>
        )}

        {selectedTab === 'flights' && (
          <section aria-labelledby="flights">
            <h2 id="flights" className="text-lg font-bold mb-4">Lista de Vuelos</h2>
            <FlightList />
          </section>
        )}

        <section aria-labelledby="promotions">
          <Promotions />
        </section>
      </main>
    </>
  );
}

export default App;
