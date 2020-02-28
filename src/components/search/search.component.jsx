import React from 'react';
import './search.styles.css';

export const Search = ({ placeholder, onSearch }) => {
  return (
    <input
      type="search"
      placeholder={placeholder}
      onChange={onSearch}
      className="search-box"
    />
  );
};
