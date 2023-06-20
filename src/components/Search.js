import React, { useState } from "react";

function Search({ plantSearch }) {
  const [formSearch, setFormSearch] = useState("")

  function searchForPlant(e) {
    setFormSearch(e)
    plantSearch(formSearch)
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => searchForPlant(e.target.value)}
      />
    </div>
  );
}

export default Search;
