import React from 'react';
import { Player } from '../data/players';
import { PlayerJumbotron } from './PlayerJumbotron';

interface ComparisonViewProps {
  selectedPlayers: (Player | null)[];
}

export const ComparisonView: React.FC<ComparisonViewProps> = ({ selectedPlayers }) => (
  <div className="flex flex-col md:flex-row gap-4">
    {selectedPlayers.map((player, index) => (
      <div key={index} className="flex-1">
        {player ? (
          <PlayerJumbotron player={player} />
        ) : (
          <div className="bg-nba-navy-700 p-6 rounded-lg shadow-md text-center text-nba-orange-400">
            Select a player to compare
          </div>
        )}
      </div>
    ))}
  </div>
);