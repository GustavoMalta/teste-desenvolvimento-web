import React,{useEffect, useState} from 'react';
import {Link, useHistory, useParams} from 'react-router-dom';

import './styles.css';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import api from "../../services/api";


export default function PokeDetail(){
  const {id} = useParams();

  const [pokemon, setPokemon] = useState([]);
  useEffect(() =>{
    async function loadPoke(){
      const response = await api.get('/pokemon/'+id);
      setPokemon(response.data);
    } 
    loadPoke();
  },[]);
  
  if(!pokemon){ // Delay para home denovo
    return(
      <div>
        Nao encontrado
      </div>
    )
  }

  console.log(pokemon);
  console.log(id);
return(
      <div className="card my-5 shadow">
        <div className="cart-title p-4">
          <h3>{pokemon["Name"]}</h3>
          <h5 className="text-right"><strong>Pokedex Code: </strong>{pokemon["Pokedex Number"]}</h5>
        </div>
        <div className="row container">
<div className="col-12 col-sm-6"> 
        <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon["Img name"]}.png`}
             alt={pokemon["Name"]}
             width="250"/>
        </div>
        <div className="col-12 col-sm-6 row"> 
          <div className="row col-12 col-sm-4">
            <strong>ATK: </strong>
            <p>{pokemon["ATK"]}</p>
          </div>
          <div className="row col-12 col-sm-4">
            <strong>DEF: </strong>
            <p>{pokemon["DEF"]}</p>
          </div>
          <div className="row col-12 col-sm-4">
            <strong>STA: </strong>
            <p>{pokemon["STA"]}</p>
          </div>
          <div className="row col-12">
            <strong>STAT TOTAL: </strong>
            <p>{pokemon["STAT TOTAL"]}</p>
          </div>
        </div>
        </div>
        


        <div className="card-body row justify-content-center">
          <div className="row col-12 col-sm-6">
            <strong>Tipo: </strong>
            <p>{pokemon["Type 1"]} {pokemon["Type 2"]?'/'+pokemon["Type 2"]:''}</p>
          </div>
          <div className="row col-12 col-sm-6">
            <strong>Weather: </strong>
            <p>{pokemon["Weather 1"]} {pokemon["Weather 1"]?'/'+pokemon["Weather 1"]:''}</p>
          </div>

          <div className="row col-12 col-sm-6">
            <strong>Generation: </strong>
            <p> {pokemon["Generation"]}</p>
          </div>
          <div className="row col-12 col-sm-6">
            <strong>Evolution Stage: </strong>
            <p>{pokemon["Evolution Stage"]}</p>
          </div>
          <div className="row col-12 col-sm-6">
            <strong>Evolved: </strong>
            <p>{pokemon["Evolved"]}</p>
          </div>
          <div className="row col-12 col-sm-6">
            <strong>FamilyID: </strong>
            <p>{pokemon["FamilyID"]}</p>
          </div>
          <div className="row col-12 col-sm-6">
            <strong>Cross Generation: </strong>
            <p>{pokemon["Cross Gen"]}</p>
          </div>
          <div className="row col-12 col-sm-6">        
          <strong>Legendary: </strong>
            <p>{pokemon["Legendary"]}</p>
          </div>
          <div className="row col-12 col-sm-6">
            <strong>Aquireable: </strong>
            <p>{pokemon["Aquireable"]}</p>
          </div>
          <div className="row col-12 col-sm-6">
            <strong>Spawns: </strong>
            <p>{pokemon["Spawns"]}</p>
          </div>
          <div className="row col-12 col-sm-6">
            <strong>Regional: </strong>
            <p>{pokemon["Regional"]}</p>
          </div>
          <div className="row col-12 col-sm-6">
            <strong>Raidable: </strong>
            <p>{pokemon["Raidable"]}</p>
          </div>
          <div className="row col-12 col-sm-6">
            <strong>Hatchable: </strong>
            <p>{pokemon["Hatchable"]}</p>
          </div>
          <div className="row col-12 col-sm-6">
            <strong>Shiny: </strong>
            <p>{pokemon["Shiny"]}</p>
          </div>
          <div className="row col-12 col-sm-6">
            <strong>Nest: </strong>
            <p>{pokemon["Nest"]}</p>
          </div>
          <div className="row col-12 col-sm-6">
            <strong>New: </strong>
            <p>{pokemon["New"]}</p>
          </div>
          <div className="row col-12 col-sm-6">
            <strong>No- Gettable: </strong>
            <p>{pokemon["No- Gettable"]}</p>
          </div>
          <div className="row col-12 col-sm-6">
            <strong>Future Evolve: </strong>
            <p>{pokemon["Future Evolve"]}</p>
          </div>
          <div className="row col-12 col-sm-6">
            <strong>100% CP @ 40: </strong>
            <p>{pokemon["100% CP @ 40"]}</p>
          </div>
          <div className="row col-12 col-sm-6">
            <strong>100% CP @ 39: </strong>
            <p>{pokemon["100% CP @ 39"]}</p>
          </div>

        </div>
        </div>
      
);
}