import { useState } from "react";
import dummyData from "./dummyData";
import "./App.css";
// import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/SearchResults/SearchResults";

function App() {
  ///setup dummy data as a placeholder
  const [data, setData] = useState(dummyData);
  console.log(data);
  return (
    <>
      {/* <SearchBar data={data} /> */}
      <SearchResults data={data} />
    </>
  );
}

export default App;
