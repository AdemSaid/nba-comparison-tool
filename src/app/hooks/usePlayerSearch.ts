import { useState, useMemo } from 'react';
import { Player } from '../data/players';

export const usePlayerSearch = (players: Player[]) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPlayers = useMemo(() => {
    if (!searchTerm.trim()) return players;
    const lowercasedTerm = searchTerm.toLowerCase();
    return players.filter(player => 
      player.name.toLowerCase().includes(lowercasedTerm) ||
      player.team.toLowerCase().includes(lowercasedTerm) ||
      player.position.toLowerCase().includes(lowercasedTerm)
    );
  }, [players, searchTerm]);

  return { searchTerm, setSearchTerm, filteredPlayers };
};