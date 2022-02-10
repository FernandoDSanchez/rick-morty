import React from 'react';
import './Character.css';
import {

  Link
  } from "react-router-dom";
export const Character = ({id, name, species, status, gender, image}) => {

  return(
    <Link to={`/character/${id}`}>
      <section className='card-caracter'>
        <h2>{name + id}</h2>
        <img src={image} alt={name} />
        <div className='info'>
          <p><span className='bold-text'>Especie: </span>{species}</p>
          <p className='flex-estado'><span className='bold-text'>Estado:</span> <span className={status === 'Alive'? 'alive' : 'dead'}></span>{status === 'Alive' ? 'Vivo' : 'Muerto'}</p>
          <p><span className='bold-text'>Genero: </span>{gender === 'Male' ? 'Masculino' : 'Femenino'}</p>
        </div>
      </section>
    </Link>
  )
}