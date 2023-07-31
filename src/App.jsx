import { useState } from "react";
import dummyData from "./dummyData";
import "./App.css";
// import SearchBar from "./components/SearchBar/SearchBar";
// import SearchResults from "./components/SearchResults/SearchResults";
import Playlist from "./components/Playlist/Playlist";

function App() {
  ///setup dummy data as a placeholder
  const [data, setData] = useState(dummyData);
  console.log(data);
  return (
    <>
      {/* <SearchResults data={data} /> */}
      <Playlist data={data} />
    </>
  );
}

export default App;
