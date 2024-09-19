import React from 'react';
import { Player } from '../data/players';
import { PlayerCard } from './PlayerCard';

interface PlayerListProps {
  players: Player[];
  selectedPlayers: (Player | null)[];
  onPlayerSelect: (player: Player) => void;
}

export const PlayerList: React.FC<PlayerListProps> = ({ players, selectedPlayers, onPlayerSelect }) => (
  <div className="space-y-2">
    {players.map(player => (
      <PlayerCard 
        key={player.id} 
        player={player} 
        isSelected={selectedPlayers.some(p => p?.id === player.id)}
        onSelect={onPlayerSelect}
      />
    ))}
  </div>
);