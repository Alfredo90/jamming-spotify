import React, { useContext } from "react";
import { Data } from "../../App";
import PlaylistTrack from "../PlaylistTrack/PlaylistTrack";

const Playlist = ({ playlistName, setPlaylistName }) => {
  const { playlistTracks } = useContext(Data);

  const namePlaylistHandler = ({ target }) => setPlaylistName(target.value);

  return (
    <form className="flex flex-col gap-10 border-2">
      <input onChange={namePlaylistHandler} value={playlistName} type="text" />
      <ul>
        {playlistTracks.map((track) => (
          <PlaylistTrack key={track.id} track={track} />
        ))}
      </ul>
      <button type="submit">Save to Spotify</button>
    </form>
  );
};

export default Playlist;
