import React from "react";
// import PlaylistTrack from "../PlaylistTrack/PlaylistTrack";

const Playlist = ({
  playlistName,
  setPlaylistName,
  playlistTracks,
  handleRemoveTrack,
}) => {
  // console.log(playlistTracks);
  const namePlaylistHandler = ({ target }) => setPlaylistName(target.value);

  return (
    <div className="flex flex-col gap-10 border-2">
      <input onChange={namePlaylistHandler} value={playlistName} type="text" />
      {playlistName}
      <ul>
        {playlistTracks.map((track) => (
          <li key={track.id} className="flex justify-between items-center ">
            <span className="flex flex-col justify-center items-center">
              <h1>{track.name}</h1>
              <h2>
                {track.artist} | {track.album}
              </h2>
            </span>
            <button onClick={() => handleRemoveTrack(track.id)}>-</button>
          </li>
        ))}
      </ul>
      <button type="submit">Save to Spotify</button>
    </div>
  );
};

export default Playlist;
