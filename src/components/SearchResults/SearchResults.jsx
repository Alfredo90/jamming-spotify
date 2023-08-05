import React from "react";
import Tracklist from "../Tracklist/Tracklist";

const SearchResults = ({ searchList }) => {
  console.log(searchList);
  return (
    <>
      <Tracklist searchList={searchList} />
    </>
  );
};

export default SearchResults;
