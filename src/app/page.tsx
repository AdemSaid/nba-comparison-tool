import React from 'react';
import PlayerList from './components/PlayerList';
import { players } from './data/players';

const Home: React.FC = () => {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">NBA Player Comparison Tool</h1>
      <PlayerList players={players} />
    </main>
  );
};

export default Home;