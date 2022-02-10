import React from 'react';
import { useEffect, useState } from "react";
import { getCharacters } from "../services/getCharacters"
import { Character } from "./Character";

export const ListOfCharacters = ({ page }) => {
  const [characters, setCharacter ] = useState([]);
  

  useEffect(() => {
    getCharacters(page).then( async (character) => setCharacter(character));
  }, [ page ]);

  
  return(
    <>
      {characters.length === 0 ? <p>Cargando...</p> :
        characters.map(({id, name, species, status, gender, image}) =>
        <Character name={name} species={species} status={status} gender={gender} image={image} key={id} id={id}/>
      )}
    </>
  )
}
