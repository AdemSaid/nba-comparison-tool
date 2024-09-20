import React from 'react';
import { Player } from '../data/players';

interface PlayerCardProps {
  player: Player;
  isSelected: boolean;
  onSelect: (player: Player) => void;
}

export const PlayerCard: React.FC<PlayerCardProps> = ({ player, isSelected, onSelect }) => (
<div 
  className={`p-3 rounded cursor-pointer transition-colors border-2 ${
      isSelected 
        ? 'bg-nba-orange-600 text-white hover:bg-nba-orange-700 focus:ring-4 focus:ring-nba-orange-400' 
        : 'bg-nba-navy-700 text-white hover:bg-nba-navy-600 focus:ring-4 focus:ring-nba-navy-400'
    }`}
    onClick={() => onSelect(player)}
    onKeyDown={(e) => e.key === 'Enter' && onSelect(player)}
    tabIndex={0}
    role="button"
    aria-pressed={isSelected}
  >
  <div className="font-bold truncate">{player.name}</div>
  <div className="truncate text-sm opacity-80">{player.team}</div>
</div>
);


