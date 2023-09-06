import SearchBar from "./SearchBar"
import { NavLink } from "react-router-dom"

function Nav({onSearch}){
    let randomId = Math.floor(Math.random()*825+1)
    return (
        <div>
            <button>
            <NavLink to={"/about"}>About
            </NavLink>
            </button>
            <button>
            <NavLink to={"/home"}>Home
            </NavLink>
            </button>
            <SearchBar onSearch={onSearch}/>
            <button onClick={() => onSearch(randomId)}>Random</button>
        </div>
    )

}

export default Nav