import React from 'react';
import { Player as PlayerType } from '../data/players';

interface PlayerProps {
  player: PlayerType;
  onSelect: (player: PlayerType) => void;
}

const Player: React.FC<PlayerProps> = ({ player, onSelect }) => {
  return (
    <div 
      className="bg-gray-700 hover:bg-cyan-600 p-2 rounded cursor-pointer hover:bg-gray-200 transition-colors"
      onClick={() => onSelect(player)}
    >
      <span className="font-bold">{player.name}</span> - {player.team}
    </div>
  );
};

export default Player;