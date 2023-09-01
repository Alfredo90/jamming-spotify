const PlaylistTrack = ({ track: { id, name, artist, album }, removeTrack }) => {
  return (
    <li className="flex justify-between items-center ">
      <span className="flex flex-col justify-center items-center">
        <h1>{name}</h1>
        <h2>
          {artist} | {album}
        </h2>
      </span>
      <button onClick={() => removeTrack(id)}>-</button>
    </li>
  );
};

export default PlaylistTrack;
