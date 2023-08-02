import React from "react";

const Track = ({ item: { id, name, artist, album } }) => {
  return (
    <>
      <h2>{name}</h2>
      <h3>
        {artist} | {album}
      </h3>
      <button>+</button>
    </>
  );
};

export default Track;
