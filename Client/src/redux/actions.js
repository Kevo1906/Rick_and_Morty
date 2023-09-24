import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } 
from "./action-types"
import axios from "axios"

export const addFav = (character) => {
    const endpoint = "http://localhost:3001/rickandmorty/fav" 
    console.log(character)
    return (dispatch) => {
        axios.post(endpoint, character).then(({data}) => {
            return dispatch({
                type: ADD_FAV,
                payload: data,
            })
        })
    }
}

export const removeFav = (id) => {
    const enpoint = "http://localhost:3001/rickandmorty/fav/" + id
    return (dispatch) => {
        axios.delete(enpoint).then(({data}) => {
            return dispatch({
                type: REMOVE_FAV,
                payload: data,
            })
        })
    }
}

export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender
    }
}

export const orderCards = (orden) => {
    return {
        type: ORDER,
        payload: orden
    }
}