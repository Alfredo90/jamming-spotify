import { useState } from "react";

import dummyData from "./dummyData";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/SearchResults/SearchResults";
import Playlist from "./components/Playlist/Playlist";
const App = () => {
  const [searchList, setSearchList] = useState(dummyData);

  return (
    <main className="border-2 flex flex-col justify-center items-center">
      <div className="border-2">
        <SearchBar />
      </div>
      <div className="  flex flex-row justify-center items-center gap-10 max-w-96 max-h-96">
        <SearchResults searchList={searchList} />
        <Playlist />
      </div>
    </main>
  );
};

export default App;
