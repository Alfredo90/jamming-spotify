import { useState } from "react";

const Playlist = ({ data }) => {
  // const [playlistName, setPlaylistName] = useState("");
  const [playlistTrack, setPlaylistTrack] = useState(data);
  // const [isEditing, setIsEditing] = useState(true);

  // const submitChangedName = (e) => {
  //   e.preventDefault();
  // };
  // const changePlaylistName = ({ target }) => {
  //   setPlaylistName(target.value);
  // };

  return (
    <>
      <ul>
        {playlistTrack.map(({ id, name, artist, album }) => (
          <li key={id}>
            <h2>{name}</h2>
            <h3>
              {artist} | {album}
            </h3>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Playlist;
