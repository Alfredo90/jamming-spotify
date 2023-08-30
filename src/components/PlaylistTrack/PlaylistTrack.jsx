import React, { useContext } from "react";
import { Data } from "../../App";

const PlaylistTrack = ({ track: { id, name, artist, album } }) => {
  const { playlistTracks, setPlaylistTracks } = useContext(Data);

  const handleRemoveTrack = (trackId) => {
    setPlaylistTracks(playlistTracks.filter((track) => track.id !== trackId));
  };
  return (
    <li className="flex justify-between items-center ">
      <span className="flex flex-col justify-center items-center">
        <h1>{name}</h1>
        <h2>
          {artist} | {album}
        </h2>
      </span>
      <button onClick={() => handleRemoveTrack(id)}>-</button>
    </li>
  );
};

export default PlaylistTrack;
