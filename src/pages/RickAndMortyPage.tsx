import React, {useCallback, useEffect, useState} from "react";
import {Grid, styled} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import { fetchCharacters, fetchEpisodes } from "../store/actions/rickAndMortyAction";

const Avatar = styled('img')`
  width: 80px;
  height: 130px;
  object-fit: cover;
`

export interface CharacterItem {
  created:string,
  episode: [string],
  gender:string,
  id: number,
  image:string,
  location:{ 
      name:string,
      url:string
  },
  name:string,
  origin: {
      name:string,
      url:string
  },
  species:string,
  status:string,
  type:string,
  url:string
}

export const RickAndMortyPage : React.FC  = () => {
    const characters : CharacterItem[] = useSelector<Array<CharacterItem>>(state => state.rickAndMorty.characters.results)
    const episodes = useSelector(state => state.rickAndMorty.episodes);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCharacters());
        dispatch(fetchEpisodes())
    }, [dispatch])

    return (
        <div>
            <Grid container spacing={3}>
                {characters?.map((character : CharacterItem) => (
                    <Grid item xs={4} key={character.id}>
                        <Avatar src={character.image} />
                        <a href={character.url} target="_blank" rel="noreferrer">{character.name}</a>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}
