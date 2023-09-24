import { Link } from "react-router-dom";
import style from "./Card.module.css"
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useEffect, useState } from "react";

function Card(props) {
  const [isFav, setIsFav] = useState(false)

  const handleFavorite = () => {
    
    if(isFav) {
      setIsFav(false)
      props.removeFav(props.id)
    } else {
      
      setIsFav(true)
      
      props.addFav(props)
    }
    
  }
  useEffect(()=>{
    props.allCharecters.forEach((fav)=>{
      if (fav.id === props.id) {
        setIsFav(true)
      }
    })
  },[props.allCharecters])

  return (
    
    <div className={style.card}>
      {isFav ? (
        <button onClick={handleFavorite} className={style.favoriteButton}>💚</button>) : (
          <button onClick={handleFavorite} className={style.favoriteButton}>🤍</button>
        )}
      <button className={style.closeButton} onClick={()=>props.onClose(props.id)}>X</button>
      
      <h2 className={style.name}>{props.name}</h2>
      
      <h2 className={style.status}>{props.status}</h2>
      <Link to={`/detail/${props.id}`}>
      <img className={style.img} src={props.image} alt={props.name} />
      </Link>
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
    allCharecters: state.allCharecters
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Card); 
