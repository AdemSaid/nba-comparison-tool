// app/page.tsx

'use client';

import React from 'react';
import { players } from './data/players';
import { usePlayerSelection } from './hooks/usePlayerSelection';
import { PlayerList } from './components/PlayerList';
import { ComparisonView } from './components/ComparisonView';

const Home: React.FC = () => {
  const { selectedPlayers, togglePlayerSelection } = usePlayerSelection(2);

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">NBA Player Comparison Tool</h1>
      <div className="flex gap-8">
        <div className="w-1/3">
          <PlayerList 
            players={players} 
            selectedPlayers={selectedPlayers}
            onPlayerSelect={togglePlayerSelection}
          />
        </div>
        <div className="w-2/3">
          <ComparisonView selectedPlayers={selectedPlayers} />
        </div>
      </div>
    </main>
  );
};

export default Home;