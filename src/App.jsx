import { createContext, useState } from "react";
import "./App.css";
import dummyData from "./dummyData";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/SearchResults/SearchResults";
import Playlist from "./components/Playlist/Playlist";

export const Data = createContext();

const App = () => {
  const [searchTrackList, setSearchTrackList] = useState(dummyData);
  const [playlistName, setPlaylistName] = useState("");
  const [playlistTracks, setPlaylistTracks] = useState([]);
  // console.log(playlistTracks);

  const addTrack = (track) => {
    const isTrackAdded = playlistTracks.find((savedTrack) => {
      savedTrack.id === track.id
        ? console.log(setPlaylistTracks((prev) => [...prev, track]))
        : playlistTracks;
    });
    console.log(isTrackAdded);
    return isTrackAdded;
  };
  console.log(addTrack(3));

  return (
    <main className="border-2 flex flex-col justify-center items-center max-w-full max-h-full gap-10">
      <Data.Provider value={{ searchTrackList, setSearchTrackList, addTrack }}>
        <div className="border-2">
          <SearchBar />
        </div>
        <div className="  flex flex-row justify-center items-center gap-10 border-2">
          <SearchResults />
          <Playlist
            playlistName={playlistName}
            setPlaylistName={setPlaylistName}
            playlistTracks={playlistTracks}
          />
        </div>
      </Data.Provider>
    </main>
  );
};

export default App;
