import React from "react";
import Tracklist from "../Tracklist/Tracklist";

const SearchResults = ({ filtered }) => {
  return (
    <div className="border-2">
      <h1>Results</h1>
      <Tracklist filtered={filtered} />
    </div>
  );
};

export default SearchResults;
