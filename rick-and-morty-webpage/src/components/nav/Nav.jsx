import SearchBar from "./SearchBar"
import { NavLink } from "react-router-dom"
import "./Nav.css"

function Nav({onSearch,logout}){
    
    return (
        <div className="nav">
            <button>
            <NavLink to={"/about"}>About
            </NavLink>
            </button>
            <button>
            <NavLink to={"/favorites"}>Favorites
            </NavLink>
            </button>
            <button>
            <NavLink to={"/home"}>Home
            </NavLink>
            </button>
            <img src="..\..\img\home.png" alt="home" className="img__home"/>
            <SearchBar onSearch={onSearch}/>
            
            <button onClick={logout}>Logout</button>
        </div>
    )

}

export default Nav