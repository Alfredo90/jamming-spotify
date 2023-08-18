import React, { useContext } from "react";

import Track from "../Track/Track";
const Tracklist = ({ filtered }) => {
  return (
    <ul>
      {filtered.map((track) => (
        <Track key={track.id} track={track} />
      ))}
    </ul>
  );
};

export default Tracklist;
