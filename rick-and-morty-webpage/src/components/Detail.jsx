import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

function Detail(props){
    const {id} = useParams()
    const[character, setCharacter] = useState({})

    useEffect(()=>{
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then((res) => res.json())
        .then((data) => data.name ? setCharacter(data): window.alert("No hay personajes con ese ID"))
    },[id])

    if(character.name){
    return(
        <div>
            <h1>{character.name}</h1>
            <img src={character.image} alt={character.name} />
            <h2>STATUS | {character.status}</h2>
            <h2>GENDER | {character.gender}</h2>
            <h2>SPECIE | {character.species}</h2>
            <h2>ORIGIN | {character.origin.name}</h2>
            
        </div>
    )} else{ return null }
}

export default Detail