import React from 'react';
import { Player } from '../data/players';

interface PlayerCardProps {
  player: Player;
  isSelected: boolean;
  onSelect: (player: Player) => void;
}

export const PlayerCard: React.FC<PlayerCardProps> = ({ player, isSelected, onSelect }) => (
  <div 
    className={`p-2 rounded cursor-pointer transition-colors ${
      isSelected ? 'bg-blue-200 hover:bg-blue-300' : 'bg-gray-700 hover:bg-gray-200 hover:text-slate-700'
    }`}
    onClick={() => onSelect(player)}
  >
    <span className="font-bold">{player.name}</span> - {player.team}
  </div>
);