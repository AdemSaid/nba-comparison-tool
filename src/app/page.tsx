'use client';

import React, { useState } from 'react';
import PlayerList from './components/PlayerList';
import PlayerJumbotron from './components/PlayerJumbotron';
import { players, Player } from './data/players';

const Home: React.FC = () => {
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);

  const handleSelectPlayer = (player: Player) => {
    setSelectedPlayer(player);
  };

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">NBA Player Comparison Tool</h1>
      <div className="flex gap-8">
        <div className="w-1/3">
          <PlayerList players={players} onSelectPlayer={handleSelectPlayer} />
        </div>
        <div className="w-2/3">
          <PlayerJumbotron player={selectedPlayer} />
        </div>
      </div>
    </main>
  );
};

export default Home;