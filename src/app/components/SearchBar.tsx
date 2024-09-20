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
      className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
    />
  </div>
);