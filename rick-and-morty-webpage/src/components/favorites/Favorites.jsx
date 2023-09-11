import { connect } from "react-redux"
import Card from "../card/Card"
import { removeFav } from "../../redux/actions"

function Favorites ({myFavorites, removeFav})  {
    return (
        <div >
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