import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";
import style from "./Nav.module.css";
import { FaSignOutAlt } from 'react-icons/fa'

function Nav({ onSearch, logout }) {
  return (
    <div className={style.nav}>
        <SearchBar onSearch={onSearch} className={style.searchbar}/>
      <div className={style.container}>
        <NavLink
          to={"/about"}
          className={({ isActive }) => (isActive ? style.activeLink : null)}
        >
          <button className={style.tabs}>About </button>
        </NavLink>

        
          <NavLink
            to={"/favorites"}
            className={({ isActive }) =>
              isActive ? style.activeLink : null + "s"
            }
          ><button className={style.tabs}>
            Favorites</button>
          </NavLink>
        
        
          <NavLink
            to={"/home"}
            className={({ isActive }) => (isActive ? style.activeLink : null)}
          >
            <button className={style.tabs}>Home</button>
          </NavLink>
        
      </div>
      

      <button onClick={logout} className={style.logoutbutton}>
      <FaSignOutAlt/>  Logout</button>
    </div>
  );
}

export default Nav;
