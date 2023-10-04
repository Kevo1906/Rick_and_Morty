import { connect, useDispatch } from "react-redux"
import Card from "../card/Card"
import { filterCards, orderCards, removeFav } from "../../redux/actions"
import { useEffect, useState } from "react"
import style from "./Favorites.module.css"    

function Favorites ({myFavorites, removeFav})  {
    const dispatch = useDispatch()
    const [aux, setAux] = useState(false)

    useEffect(() => {
        dispatch(orderCards("A"))
        dispatch(filterCards("All"))
    },[])

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value))
        aux ? setAux(false): setAux(true)
    }
    const handleFilter = (event)=>{
        dispatch(filterCards(event.target.value))
    }
    return (
        <div className={style.container}>
          <div className={style.filterContainer}>
            <select className={style.selectCharacter} onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>
            <select onChange={handleFilter} className={style.selectCharacter}>
              <option value="All">All</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
            </select>
            </div>
            <div className={style.cards}>
      {myFavorites.map((character) => (
        <Card
          key={character.id}
          id={character.id}
          name={character.name}
          status={character.status}
          species={character.species}
          gender={character.gender}
          origin={character.origin}
          image={character.image}
          onClose={removeFav}
        />
      ))}
      </div>
    </div>
    )
}

const mapStateToProps = state=>{
    return{myFavorites: state.myFavorites}
}
const mapDispatchToProps = dispatch=> {
    return {
      
      removeFav: (id) =>{dispatch(removeFav(id))
      }
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Favorites)