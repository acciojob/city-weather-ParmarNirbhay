
import React, { useState } from "react";
import './../styles/App.css';
import "../styles/App.css"
import Data from "./data";
import SearchBar from "./searchBar";
const App = () => {


  const [data , setData] = useState({}); 

  return (


    <div>
        {/* Do not remove the main div */}
        <SearchBar setData = {setData} />
        <Data  data={data}/>
    </div>
  )
}

export default App