import React, { useState } from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const searchHandle = ({ target }) => {
    setSearchTerm(target.value);
  };
  return (
    <div className="flex justify-center items-center ">
      <input onChange={searchHandle} value={searchTerm} type="text" />
      {searchTerm}
      <button type="submit">Search</button>
    </div>
  );
};

export default SearchBar;
