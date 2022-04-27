import axios from "axios";

export const GET_CHARACTERS = "GET_CHARACTERS"
export const GET_EPISODES = "GET_EPISODES"

export const fetchCharacters = () => (dispatch) => {
    axios.get("https://rickandmortyapi.com/api/character").then((res) => {
        dispatch({
            type: GET_CHARACTERS,
            payload:res.data
        })
    })
}

export const fetchEpisodes = () => (dispatch) => {
    axios.get("https://rickandmortyapi.com/api/episode").then((res) => {
        dispatch({
            type: GET_EPISODES,
            payload:res.data
        })
    })
}