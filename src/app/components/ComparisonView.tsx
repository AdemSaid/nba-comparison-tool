import React from 'react';
import { Player } from '../data/players';
import { PlayerJumbotron } from './PlayerJumbotron';

interface ComparisonViewProps {
  selectedPlayers: (Player | null)[];
}

export const ComparisonView: React.FC<ComparisonViewProps> = ({ selectedPlayers }) => (
  <div className="flex gap-4">
    {selectedPlayers.map((player, index) => (
      <div key={index} className="flex-1">
        {player ? (
          <PlayerJumbotron player={player} />
        ) : (
          <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
            Select a player to compare
          </div>
        )}
      </div>
    ))}
  </div>
);