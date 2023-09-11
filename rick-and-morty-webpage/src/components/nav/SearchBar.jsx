import { useState } from "react";
import "./SearchBar.css"

function SearchBar(props) {
  let value;
  let [id, setId] = useState("")
  const handleChange = (event) => {
    setId(event.target.value)
  }
  let randomId = Math.floor(Math.random()*825+1) 
  return (
    <div className="searchbar">
      <button className="searchbar-random" onClick={() => props.onSearch(randomId)}>Random</button>
      <input className="searchbar-input" type="search" value={value} onChange={handleChange}/>
      <button className="searchbar-Add" onClick={() => props.onSearch(id)}>Search</button>
    </div>
  );
}

export default SearchBar;
