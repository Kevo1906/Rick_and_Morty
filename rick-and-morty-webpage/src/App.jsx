import "./App.css";
import Card from "./components/Card.jsx";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav.jsx";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Detail from "./components/Detail";
import NotFound from "./components/NotFound";


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
      <Routes>
        <Route path="/home" element={ <Cards characters={characters} onClose={onClose}/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
     
    </div>
  );
}

export default App;
