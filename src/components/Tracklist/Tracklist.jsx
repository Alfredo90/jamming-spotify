import React, { useContext } from "react";
import { Data } from "../../App";
import Track from "../Track/Track";
const Tracklist = () => {
  const { searchTrackList, setSearchTrackList } = useContext(Data);
  // console.log(searchTrackList);
  return (
    <ul>
      {searchTrackList.map((track) => (
        <Track key={track.id} track={track} />
      ))}
    </ul>
  );
};

export default Tracklist;
