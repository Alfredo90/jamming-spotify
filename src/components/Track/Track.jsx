import React, { useContext } from "react";
import { Data } from "../../App";

const Track = ({ track: { id, album, artist, name } }) => {
  // console.log(id);
  const { addToPlaylist } = useContext(Data);

  return (
    <li className="flex justify-between items-center ">
      <span className="flex flex-col justify-center items-center">
        <h1>{name}</h1>
        <h2>
          {artist} | {album}
        </h2>
      </span>
      <button onClick={() => addToPlaylist(id)}>+</button>
    </li>
  );
};

export default Track;
