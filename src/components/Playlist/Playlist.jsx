import React from "react";
import PlaylistTrack from "../PlaylistTrack/PlaylistTrack";

const Playlist = ({ playlistName, setPlaylistName, playlistTracks }) => {
  // console.log(playlistName);
  const namePlaylistHandler = ({ target }) => {
    setPlaylistName(target.value);
  };
  return (
    <div className="flex flex-col gap-10 border-2">
      <input onChange={namePlaylistHandler} value={playlistName} type="text" />
      {playlistName}
      <ul>
        {playlistTracks.map((track) => (
          <PlaylistTrack key={track.id} track={track} />
        ))}
      </ul>
      <button type="submit">Save to Spotify</button>
    </div>
  );
};

export default Playlist;
