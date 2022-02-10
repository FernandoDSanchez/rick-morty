import React from 'react';
import {useParams} from "react-router-dom";
import { getCharacters } from "../services/getCharacters"
import { useState, useEffect } from "react"


export function DetailCharacter({page}) {
    const [characters, setCharacter ] = useState([]);
    let { charId } = useParams()
    useEffect(() => {
        getCharacters(page).then( async (character) => setCharacter(character));
    }, [ page ]);
    let characterArr = characters.filter((element) => { return element.id == charId})
    console.log(characterArr)
    const {name, species, status, gender, image, id} = characterArr[0]
    return (
        <div>
                <p>{name,species,status,gender,image,id}</p>
        </div>
    )
} 

