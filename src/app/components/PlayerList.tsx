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
    onPlayerSelect,
    searchTerm,
    onSearchChange }) => (
    <div>    
        <SearchBar searchTerm={searchTerm} onSearchChange={onSearchChange} />  
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
  </div>
);