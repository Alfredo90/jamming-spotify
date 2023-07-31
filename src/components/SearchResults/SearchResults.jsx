import React from "react";

const SearchResults = ({ data }) => {
  return (
    <>
      <h1>Results</h1>
      <ul>
        {data.map(({ id, name, artist, album }) => (
          <li key={id}>
            <h2>{name}</h2>
            <h3>
              {artist} | {album}
            </h3>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SearchResults;
