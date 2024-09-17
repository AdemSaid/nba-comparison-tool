import React from 'react';
import Player from './Player';
import { Player as PlayerType } from '../data/players';

interface PlayerListProps {
  players: PlayerType[];
}

const PlayerList: React.FC<PlayerListProps> = ({ players }) => {
  return (
    <div className="space-y-2 bg-gray-700">
      {players.map((player) => (
        <Player key={player.id} name={player.name} team={player.team} />
      ))}
    </div>
  );
};

export default PlayerList;