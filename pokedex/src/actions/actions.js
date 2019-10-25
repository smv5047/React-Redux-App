import axios from "axios"

export const CATCH_POKEMON_START = "CATCH_POKEMON_START"
export const CATCH_POKEMON_SUCCESS = "CATCH_POKEMON_SUCCESS"
export const CATCH_POKEMON_FAILURE = "CATCH_POKEMON_FAILURE"


const random = Math.floor(Math.random() *100)

console.log(random)
export function catchPokemon() {
    return (dispatch) =>{
        dispatch({type: CATCH_POKEMON_START})

        axios.get(`https://pokeapi.co/api/v2/pokemon/`)
            .then(res => {
                console.log(res)
                dispatch({type:CATCH_POKEMON_SUCCESS, payload: res.data.results})
            })
            .catch(err=>{
                dispatch({type:CATCH_POKEMON_FAILURE, payload: err})
            })
    }
}