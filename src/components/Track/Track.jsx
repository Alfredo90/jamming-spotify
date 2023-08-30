import React, { useContext } from "react";
import { Data } from "../../App";

const Track = ({ track: { id, album, artist, name } }) => {
  const { searchTrackList, setPlaylistTracks, playlistTracks } =
    useContext(Data);

  const addToPlaylist = (id) => {
    searchTrackList.find((savedTrack) => {
      if (savedTrack.id === id)
        setPlaylistTracks([...playlistTracks, savedTrack]);
    });
  };

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
