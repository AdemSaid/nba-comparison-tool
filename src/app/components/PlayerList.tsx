import React from 'react';
import Player from '../components/Player';
import { Player as PlayerType } from '../data/players';

interface PlayerListProps {
  players: PlayerType[];
  onSelectPlayer: (player: PlayerType) => void;
}

const PlayerList: React.FC<PlayerListProps> = ({ players, onSelectPlayer }) => {
  return (
    <div className="space-y-2">
      {players.map((player) => (
        <Player key={player.id} player={player} onSelect={onSelectPlayer} />
      ))}
    </div>
  );
};

export default PlayerList;