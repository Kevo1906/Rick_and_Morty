import "./App.css";
import Card from "./components/Card.jsx";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav.jsx";
import { useState } from "react";

function App() {
  const [characters, setCharacters] = useState([]);

  const onSearch = (id) => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => {
        let charactersFilter = characters.filter((element) => element.id ==data.id)
        if (data.name && !charactersFilter.length) {
          setCharacters([...characters, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      });
  };

  const onClose = (id) => {
   console.log(id)
   setCharacters(characters.filter((element) => element.id!=id))
  }

  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Cards characters={characters} onClose={onClose}/>
    </div>
  );
}

export default App;
