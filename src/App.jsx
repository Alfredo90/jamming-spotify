import { useState } from "react";
import dummyData from "./dummyData";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const [data, setData] = useState(dummyData);
  console.log(data);
  return (
    <div>
      <SearchBar />
    </div>
  );
}

export default App;
