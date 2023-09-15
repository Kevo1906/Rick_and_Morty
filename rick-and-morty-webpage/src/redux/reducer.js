import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./action-types"

const initialState = {
    myFavorites: [],
    allCharecters: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return {
                ...state, allCharecters: [...state.allCharecters, action.payload]
            }
        case REMOVE_FAV:
            return {
                ...state, myFavorites: state.myFavorites.filter((element) => element.id !== parseInt(action.payload))
            }
        case FILTER:
            if(action.payload === "All"){ 
                return {
                    ...state, myFavorites: state.allCharecters
                }
            }
            return {
                ...state, myFavorites: state.allCharecters.filter(element => element.gender === action.payload)
            }
        case ORDER:
            let orderCopy = [...state.myFavorites]
            if(action.payload === "A") {
                orderCopy.sort(
                    (a, b) => {
                        if (a.name > b.name) return 1;
                        else return -1;
                    }
                )
            } else if (action.payload === "D") {
                orderCopy.sort(
                    (a, b) => {
                        if (a.name < b.name) return 1;
                        else return -1;
                    }
                )
            }
            return {
                ...state, myFavorites: orderCopy
            }
        default:
            return {...state}
    }
}

export default reducer