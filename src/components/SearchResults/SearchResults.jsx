import React from "react";
import Tracklist from "../Tracklist/Tracklist";

const SearchResults = ({ data }) => {
  console.log(data);
  return (
    <>
      <h1>Results</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <Tracklist item={item} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default SearchResults;
