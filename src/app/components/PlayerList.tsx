import React from 'react';
import { Player } from '../data/players';
import { PlayerCard } from './PlayerCard';
import { SearchBar } from './SearchBar';

interface PlayerListProps {
  players: Player[];
  selectedPlayers: (Player | null)[];
  onPlayerSelect: (player: Player) => void;
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export const PlayerList: React.FC<PlayerListProps> = ({ 
    players, 
    selectedPlayers, 
    onPlayerSelect }) => (
    <div>    
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {players.map(player => (
        <PlayerCard 
            key={player.id} 
            player={player} 
            isSelected={selectedPlayers.some(p => p?.id === player.id)}
            onSelect={onPlayerSelect}
        />
        ))}
    </div>
  </div>
);