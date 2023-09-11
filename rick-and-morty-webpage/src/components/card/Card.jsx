import { Link } from "react-router-dom";
import "./Card.css"
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useEffect, useState } from "react";

function Card(props) {
  const [isFav, setIsFav] = useState(false)

  const handleFavorite = () => {
    console.log(isFav)
    if(isFav) {
      setIsFav(false)
      props.removeFav(props.id)
    } else {
      console.log("Se agrego")
      setIsFav(true)
      
      props.addFav(props)
    }
    console.log(isFav)
  }
  useEffect(()=>{
    props.myFavorites.forEach((fav)=>{
      if (fav.id === props.id) {
        setIsFav(true)
      }
    })
  },[props.myFavorites])

  return (
    <div className="card">
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>) : (
          <button onClick={handleFavorite}>🤍</button>
        )}
      <button onClick={()=>props.onClose(props.id)}>X</button>
      <Link to={`/detail/${props.id}`}>
      <h2>{props.name}</h2>
      </Link>
      <h2>{props.status}</h2>
      <h2>{props.species}</h2>
      <h2>{props.gender}</h2>
      <h2>{props.origin.name}</h2>
      <img src={props.image} alt={props.name} />
    </div>
  );
}

const mapDispatchToProps = dispatch=> {
  return {
    addFav: (character) => {dispatch(addFav(character))},
    removeFav: (id) =>{dispatch(removeFav(id))
    }
  }
}

const mapStateToProps = state => {
  return {
    myFavorites: state.myFavorites
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Card); 
