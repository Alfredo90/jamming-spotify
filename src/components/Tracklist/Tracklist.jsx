import React from "react";
import Track from "../Track/Track";
const Tracklist = ({ searchList }) => {
  console.log(searchList);
  return (
    <ul>
      {searchList.map((list) => (
        <Track list={list} />
      ))}
    </ul>
  );
};

export default Tracklist;
