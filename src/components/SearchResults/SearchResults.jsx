import React from "react";
import Tracklist from "../Tracklist/Tracklist";

const SearchResults = ({ searchList }) => {
  console.log(searchList);
  return (
    <div className="border-2">
      <Tracklist searchList={searchList} />
    </div>
  );
};

export default SearchResults;
