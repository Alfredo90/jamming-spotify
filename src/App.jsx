import { useState } from "react";
import dummyData from "./dummyData";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/SearchResults/SearchResults";
import Playlist from "./components/Playlist/Playlist";
const App = () => {
  const [searchList, setSearchList] = useState(dummyData);

  return (
    <div>
      <SearchBar />
      <div>
        <SearchResults searchList={searchList} />
        <Playlist />
      </div>
    </div>
  );
};

export default App;
