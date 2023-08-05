import React from "react";

const Track = ({ list: { id, album, artist, name } }) => {
  return (
    <li key={id}>
      <h1>{name}</h1>
      <h2>{artist}</h2> | <h2>{album}</h2>
    </li>
  );
};

export default Track;
