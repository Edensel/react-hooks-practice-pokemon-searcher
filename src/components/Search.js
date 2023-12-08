import React from "react";

function Search({ searchTerm, handleSearchChange }) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={searchTerm} onChange={handleSearchChange} placeholder="Search Pokemon..." />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
