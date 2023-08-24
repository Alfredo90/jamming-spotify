import React, { useContext } from "react";
import { Data } from "../../App";

const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useContext(Data);

  const searchHandler = ({ target }) => setSearchTerm(target.value);

  return (
    <div className="flex justify-center items-center ">
      <input
        placeholder="...search"
        onChange={searchHandler}
        value={searchTerm}
        type="text"
      />
      <button type="submit">Search</button>
    </div>
  );
};

export default SearchBar;
