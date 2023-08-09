import React, { useState } from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const searchHandler = ({ target }) => {
    setSearchTerm(target.value);
  };
  return (
    <div className="flex justify-center items-center ">
      <input
        placeholder="new playlist"
        onChange={searchHandler}
        value={searchTerm}
        type="text"
      />
      {searchTerm}
      <button type="submit">Search</button>
    </div>
  );
};

export default SearchBar;
