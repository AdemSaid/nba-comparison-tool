import React from 'react';
import { Player } from '../data/players';

interface PlayerJumbotronProps {
  player: Player | null;
}

const PlayerJumbotron: React.FC<PlayerJumbotronProps> = ({ player }) => {
  if (!player) return null;

  return (
    <div className="bg-gray-800 p-6 mt-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-2">{player.name}</h2>
      <p className="mb-1"><strong>Team:</strong> {player.team}</p>
      <p className="mb-1"><strong>Position:</strong> {player.position}</p>
      <p className="mb-1"><strong>Height:</strong> {player.height}</p>
      <p className="mb-1"><strong>Weight:</strong> {player.weight}</p>
      <div className="mt-4">
        <p className="mb-1"><strong>PPG:</strong> {player.ppg.toFixed(1)}</p>
        <p className="mb-1"><strong>RPG:</strong> {player.rpg.toFixed(1)}</p>
        <p className="mb-1"><strong>APG:</strong> {player.apg.toFixed(1)}</p>
      </div>
    </div>
  );
};

export default PlayerJumbotron;