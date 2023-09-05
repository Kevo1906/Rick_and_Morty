import { useState } from "react";

function SearchBar(props) {
  let value;
  let [id, setId] = useState("")
  const handleChange = (event) => {
    setId(event.target.value)
  }
  return (
    <div>
      <input type="search" value={value} onChange={handleChange}/>
      <button onClick={() => props.onSearch(id)}>Agregar</button>
    </div>
  );
}

export default SearchBar;
