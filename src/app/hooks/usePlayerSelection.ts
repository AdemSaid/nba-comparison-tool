// hooks/usePlayerSelection.ts

import { useState, useCallback } from 'react';
import { Player } from '../data/players';

export const usePlayerSelection = (maxSelections: number = 2) => {
  const [selectedPlayers, setSelectedPlayers] = useState<(Player | null)[]>(
    Array(maxSelections).fill(null)
  );

  const togglePlayerSelection = useCallback((player: Player) => {
    setSelectedPlayers(prevSelected => {
      const index = prevSelected.findIndex(p => p?.id === player.id);
      if (index !== -1) {
        // Player is already selected, remove them
        return prevSelected.map((p, i) => i === index ? null : p);
      } else {
        // Player is not selected, add them
        const firstNull = prevSelected.indexOf(null);
        if (firstNull !== -1) {
          // There's an empty slot
          return prevSelected.map((p, i) => i === firstNull ? player : p);
        } else {
          // No empty slots, replace the oldest selection
          return [...prevSelected.slice(1), player];
        }
      }
    });
  }, []);

  return { selectedPlayers, togglePlayerSelection };
};