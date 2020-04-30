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


  console.log(pokemon);
  console.log(id);
return(

    {/*<div className="">
        <th>Pokedex Number</th>
        <th>Img name</th>
        <th>Generation</th>
        <th>Evolution Stage</th>
        <th>Evolved</th>
        <th>FamilyID</th>
        <th>Cross Gen</th>
        <th>Type 1</th>
        <th>Type 2</th>
        <th>Weather 1</th>
        <th>Weather 2</th>
        <th>STAT TOTAL</th>
        <th>ATK</th>
        <th>DEF</th>
        <th>STA</th>
        <th>Legendary</th>
        <th>Aquireable</th>
        <th>Spawns</th>
        <th>Regional</th>
        <th>Raidable</th>
        <th>Hatchable</th>
        <th>Shiny</th>
        <th>Nest</th>
        <th>New</th>
        <th>No- Gettable</th>
        <th>Future Evolve</th>
        <th>100% CP @ 40</th>
        <th>100% CP @ 39</th>
</div>*/},
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
        <div className="col-12 col-sm-6"> 
          <div className="row col-12">
            <strong>STAT TOTAL: </strong>
            <p>{pokemon["STAT TOTAL"]}</p>
          </div>
          <div className="row col-12 col-sm-4">
            <strong>ATKn: </strong>
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
        
        
      
        </div>
        
        <td>{pokemon["Legendary"]}</td>
        <td>{pokemon["Aquireable"]}</td>
        <td>{pokemon["Spawns"]}</td>
        <td>{pokemon["Regional"]}</td>
        <td>{pokemon["Raidable"]}</td>
        <td>{pokemon["Hatchable"]}</td>
        <td>{pokemon["Shiny"]}</td>
        <td>{pokemon["Nest"]}</td>
        <td>{pokemon["New"]}</td>
        <td>{pokemon["No- Gettable"]}</td>
        <td>{pokemon["Future Evolve"]}</td>
        <td>{pokemon["100% CP @ 40"]}</td>
        <td>{pokemon["100% CP @ 39"]}</td>
        </div>
      
);
}