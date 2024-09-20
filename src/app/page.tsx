// app/page.tsx
'use client';

import React from 'react';
import { players } from './data/players';
import { usePlayerSelection } from './hooks/usePlayerSelection';
import { usePlayerSearch } from './hooks/usePlayerSearch';
import { ComparisonView } from './components/ComparisonView';
import { SearchBar } from './components/SearchBar';
import { PlayerList } from './components/PlayerList';

const Home: React.FC = () => {
  const { selectedPlayers, togglePlayerSelection } = usePlayerSelection(2);
  const { searchTerm, setSearchTerm, filteredPlayers } = usePlayerSearch(players);

  return (
  <main className="min-h-screen bg-nba-navy-900 text-white p-8">
    <h1 className="text-4xl font-bold mb-6 text-center text-nba-orange-500">NBA Player Comparison Tool</h1>
    
    {/* Comparison View */}
    <section className="mb-8" aria-live="polite">
      <h2 className="text-2xl font-semibold mb-4 text-nba-orange-400">Selected Players</h2>
      <ComparisonView selectedPlayers={selectedPlayers} />
    </section>
    
    {/* Search Bar */}
    <section className="mb-6">
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
    </section>
    
    {/* Player Selection */}
    <section>
      <h2 className="text-2xl font-semibold mb-4 text-nba-orange-400">Select Players</h2>
      <PlayerList 
        players={filteredPlayers} 
        selectedPlayers={selectedPlayers}
        onPlayerSelect={togglePlayerSelection}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />
    </section>
  </main>
  );
};

export default Home;