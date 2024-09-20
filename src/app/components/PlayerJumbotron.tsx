import React from 'react';
import { Player } from '../data/players';

interface PlayerJumbotronProps {
  player: Player;
}

export const PlayerJumbotron: React.FC<PlayerJumbotronProps> = ({ player }) => (
  <div className="bg-nba-navy-800 text-white p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold mb-2 text-nba-orange-400">{player.name}</h2>
    <p><strong className="text-nba-orange-300"  >Team:</strong> {player.team}</p>
    <p><strong className="text-nba-orange-300">Position:</strong> {player.position}</p>
    <p><strong className="text-nba-orange-300">Height:</strong> {player.height}</p>
    <p><strong className="text-nba-orange-300">Weight:</strong> {player.weight}</p>
    <div className="mt-4">
      <p><strong className="text-nba-orange-300">PPG:</strong> {player.ppg.toFixed(1)}</p>
      <p><strong className="text-nba-orange-300">RPG:</strong> {player.rpg.toFixed(1)}</p>
      <p><strong className="text-nba-orange-300">APG:</strong> {player.apg.toFixed(1)}</p>
    </div>
  </div>
);