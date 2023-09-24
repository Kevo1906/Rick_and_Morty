import "./App.css";
import Card from "./components/card/Card.jsx";
import Cards from "./components/cards/Cards.jsx";
import Nav from "./components/nav/Nav.jsx";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About";
import Detail from "./components/Detail";
import NotFound from "./components/NotFound";
import Form from "./components/Form";
import { Provider } from "react-redux";
import store from "./redux/store";
import Favorites from "./components/favorites/Favorites";
import axios from "axios"



function App() {
  const [characters, setCharacters] = useState([]);

  const pwd = useLocation()

  const [access, setAccess] = useState(false)
  const EMAIL = "kevin0696s@gmail.com"
  const PASSWORD = "Picardo_Repez"
  const navigate = useNavigate()
  
  const login = (userData) => {
    const { email, password } = userData
    const URL = "http://localhost:3001/rickandmorty/login/"
    axios(URL + `?email=${email}&password=${password}`).then(
      response => {
        
        const{access} = response.data
        
        setAccess(access)
        access && navigate("/home")
      }
    )

  }

  const logout = ()=>{
    setAccess(false)
    navigate("/")
  }

  useEffect(() => {
    !access && navigate("/")
  }, [access])

  const onSearch = (id) => {
    fetch(`http://localhost:3001/rickandmorty/character/${id}`)
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
   
   setCharacters(characters.filter((element) => element.id!=id))
  }

  return (
    <div className="App">
      {pwd.pathname !== "/" ? <Nav onSearch={onSearch} logout={logout} />:null}
      
      <Provider store={store}>
      <Routes>
        <Route path="/" element={ <Form login={login}/>}/>
        <Route path="/favorites" element={ <Favorites/>}/>
        <Route path="/home" element={ <Cards characters={characters} onClose={onClose} />}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
      </Provider>
     
    </div>
  ); 
}

export default App;
8+9+57