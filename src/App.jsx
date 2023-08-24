import { createContext, useState } from "react";
import "./App.css";
import dummyData from "./dummyData";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/SearchResults/SearchResults";
import Playlist from "./components/Playlist/Playlist";

export const Data = createContext();

const App = () => {
  const [searchTrackList, setSearchTrackList] = useState(dummyData);
  const [searchTerm, setSearchTerm] = useState("");
  const [playlistName, setPlaylistName] = useState("");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const addToPlaylist = (trackId) => {
    searchTrackList.find((savedTrack) => {
      if (savedTrack.id === trackId)
        setPlaylistTracks([...playlistTracks, savedTrack]);
    });
  };

  const handleRemoveTrack = (trackId) => {
    setPlaylistTracks(playlistTracks.filter((track) => track.id !== trackId));
  };

  const filtered = !searchTerm
    ? searchTrackList
    : searchTrackList.filter(
        (track) =>
          track.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          track.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
          track.album.toLowerCase().includes(searchTerm.toLowerCase())
      );
  return (
    <Data.Provider
      value={{
        searchTrackList,
        setSearchTrackList,
        addToPlaylist,
        searchTerm,
        setSearchTerm,
      }}
    >
      <main className="border-2 flex flex-col justify-center items-center max-w-full max-h-full gap-10">
        <div className="border-2">
          <SearchBar />
        </div>
        <div className="  flex flex-row justify-center items-center gap-10 border-2">
          <SearchResults filtered={filtered} />
          <Playlist
            playlistName={playlistName}
            setPlaylistName={setPlaylistName}
            playlistTracks={playlistTracks}
            handleRemoveTrack={handleRemoveTrack}
          />
        </div>
      </main>
    </Data.Provider>
  );
};

export default App;
