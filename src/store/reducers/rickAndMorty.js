import {GET_CHARACTERS, GET_EPISODES} from '../actions/rickAndMortyAction'

const initialState = {
    characters:[],
    edisodes:[]
} 

export function rickAndMorty(state = initialState, action){
    const newState = {...state}
    switch (action.type){
        case GET_CHARACTERS:
            newState.characters = action.payload;
            break;
        case GET_EPISODES:
            newState.edisodes = action.payload;
            break;
        default:
            return state;
    }
    return newState
}