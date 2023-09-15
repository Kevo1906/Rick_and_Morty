import { useState } from "react";
import style from "./SearchBar.module.css"

function SearchBar(props) {
  let value;
  let [id, setId] = useState("")
  const handleChange = (event) => {
    setId(event.target.value)
  }
  let randomId = Math.floor(Math.random()*825+1) 
  return (
    <div className={style.searchbar}>
      <button className={style.button} onClick={() => props.onSearch(randomId)}>Random</button>
      <input className={style.input} type="search" value={value} onChange={handleChange}/>
      <button className={style.button} onClick={() => props.onSearch(id)}>Search</button>
    </div>
  );
}

export default SearchBar;
