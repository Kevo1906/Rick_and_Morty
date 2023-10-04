import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import style from "./Detail.module.css"
import detail from "../../img/Detail.png"

function Detail(props){
    const {id} = useParams()
    const[character, setCharacter] = useState({})
    const x = ""
    x.toUpperCase()
    useEffect(()=>{
        fetch(`http://localhost:3001/rickandmorty/character/${id}`)
        .then((res) => res.json())
        .then((data) => data.name ? setCharacter(data): window.alert("No hay personajes con ese ID"))
    },[id])

    if(character.name){
    return(
        <div className={style.container} style={{background:`url(${detail})`, backgroundSize: "cover"}}>
            <div className={style.characterContainer}>
            <h1 className={style.name}>{character.name.toUpperCase()}</h1>
            <img src={character.image} alt={character.name} className={style.img}/>
            <div className={style.status}>
            <p>STATUS : {character.status.toUpperCase()}</p>
            </div>
            <div className={style.info}>
            <div className={style.infoBox}>
                <p className={style.label}>GENDER</p>
                <h2 className={style.content}>{character.gender}</h2>
            </div>
            <div className={style.infoBox}>
                <p className={style.label}>SPECIE</p>
                <h2 className={style.content}>{character.species}</h2>
            </div>
            <div className={style.infoBox}>
                <p className={style.label}>ORIGIN</p>
                <h2 className={style.content}>{character.origin}</h2>
            </div>
            
            </div>
            </div>
            
        </div>
    )} else{ return null }
}

export default Detail