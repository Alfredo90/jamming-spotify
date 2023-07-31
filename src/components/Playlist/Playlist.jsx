import { useState } from "react";

const Playlist = ({ data }) => {
  const [playlistName, setPlaylistName] = useState("");
  const [playlistTrack, setPlaylistTrack] = useState(data);
  const [isEditing, setIsEditing] = useState(true);

  const submitChangedName = (e) => {
    e.preventDefault();
  };
  const changePlaylistName = ({ target }) => {
    setPlaylistName(target.value);
  };

  return (
    <>
      <form onSubmit={submitChangedName}>
        <input value={playlistName} onChange={changePlaylistName} type="text" />
        <ul>
          {playlistTrack.map(({ id, name, artist }) => (
            <li key={id}>
              <h2>{name}</h2>
              <h3>{artist}</h3>
            </li>
          ))}
        </ul>
        <button type="submit">Save To Spotify</button>
      </form>
    </>
  );
};

export default Playlist;
