import React from 'react';

interface PlayerProps {
  name: string;
  team: string;
}

const Player: React.FC<PlayerProps> = ({ name, team }) => {
  return (
    <div className="bg-gray-700 p-2 rounded">
      <span className="font-bold">{name}</span> - {team}
    </div>
  );
};

export default Player;