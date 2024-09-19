import React from 'react';
import { Player } from '../data/players';

interface PlayerJumbotronProps {
  player: Player;
}

export const PlayerJumbotron: React.FC<PlayerJumbotronProps> = ({ player }) => (
  <div className="bg-blue-100 text-slate-700 p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold mb-2">{player.name}</h2>
    <p><strong>Team:</strong> {player.team}</p>
    <p><strong>Position:</strong> {player.position}</p>
    <p><strong>Height:</strong> {player.height}</p>
    <p><strong>Weight:</strong> {player.weight}</p>
    <div className="mt-4">
      <p><strong>PPG:</strong> {player.ppg.toFixed(1)}</p>
      <p><strong>RPG:</strong> {player.rpg.toFixed(1)}</p>
      <p><strong>APG:</strong> {player.apg.toFixed(1)}</p>
    </div>
  </div>
);