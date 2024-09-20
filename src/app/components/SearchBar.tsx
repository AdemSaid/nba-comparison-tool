import React from 'react';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchChange }) => (
  <div className="mb-4">
    <input
      type="text"
      placeholder="Search players..."
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
      className="w-full p-2 bg-nba-navy-700 border border-nba-navy-600 rounded-md text-white placeholder-nba-navy-300 focus:outline-none focus:ring-2 focus:ring-nba-orange-400"
    />
  </div>
);