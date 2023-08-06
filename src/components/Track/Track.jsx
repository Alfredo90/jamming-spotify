import React from "react";

const Track = ({ list: { id, album, artist, name } }) => {
  return (
    <li className="flex justify-between items-center ">
      <span className="flex flex-col justify-center items-center">
        <h1>{name}</h1>
        <h2>
          {artist} | {album}
        </h2>
      </span>
      <button>+</button>
    </li>
  );
};

export default Track;
