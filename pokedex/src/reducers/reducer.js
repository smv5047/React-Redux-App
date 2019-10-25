import {
    CATCH_POKEMON_START,
    CATCH_POKEMON_SUCCESS,
    CATCH_POKEMON_FAILURE
} from "../actions/actions"

const initialState = {
    pokemon: null,
    isLoading: true,
    error: null
}

export function reducer (state=initialState, action) {
    switch(action.type){
        case CATCH_POKEMON_START:
            return {
                ...state,
                isLoading: true
            }
        case CATCH_POKEMON_SUCCESS:
            return {
                ...state,
                isLoading:false,
                pokemon: action.payload
            }
        case CATCH_POKEMON_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state
    }
}