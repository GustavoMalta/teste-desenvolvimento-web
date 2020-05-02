import React,{useEffect, useState} from 'react';
import {useParams, useHistory} from 'react-router-dom';

import './styles.css';
import { FiArrowLeftCircle, FiEdit } from 'react-icons/fi';
import api from "../../services/api";


export default function PokeDetail(){
  const {id} = useParams();
  const history = useHistory();

  const [pokemon, setPokemon] = useState([]);
  useEffect(() =>{
    async function loadPoke(){
      const response = await api.get('/pokemon/'+id);
      setPokemon(response.data);
    } 
    loadPoke();
  },[]);
  
  async function handleEdit(data){
    console.log(data)
    //const response = await api.delete('/pokemon/'+data);
    
    //console.log(response.status);
    history.push('/pokemon/Edit/'+data);
  }

  async function handleToList(){
    history.goBack();
  }
  

  if(!pokemon){ // Delay para home denovo
    return(
      <div>
        Nao encontrado
      </div>
    )
  }
return(
      <div className="card my-5 px-0 shadow col-md-7">
        <div className="card-title px-4 mb-4 shadow-sm">
          <div className="py-3 d-flex justify-content-between">
            
            <span className="btn text-info" onClick={() =>handleToList()}>
              <FiArrowLeftCircle size={20} color="#17a2b8"/>Voltar para a lista
            </span>
            <h3 className="col-4 text-capitalize">{pokemon["Name"]}</h3>

            <button className="btn btn-danger" onClick={() =>handleEdit(pokemon._id)}> Edit <FiEdit/></button>
            
          </div>
          <h5 className="text-right"><strong>Pokedex Code: </strong>{pokemon["Pokedex_Number"]}</h5>
        </div>
        
        <div className="row container">
<div className="col-12 col-sm-6"> 
        <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon["Img_name"]}.png`}
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
            <p>{pokemon.STAT_TOTAL}</p>
          </div>
        </div>
        </div>
        


        <div className="card-body row justify-content-center">
          <div className="row col-12 col-sm-6">
            <strong>Tipo: </strong>
            <p>{pokemon["Type_1"]} {pokemon["Type_2"]?'/'+pokemon["Type_2"]:''}</p>
          </div>
          <div className="row col-12 col-sm-6">
            <strong>Weather: </strong>
            <p>{pokemon["Weather_1"]} {pokemon["Weather_1"]?'/'+pokemon["Weather_1"]:''}</p>
          </div>

          <div className="row col-12 col-sm-6">
            <strong>Generation: </strong>
            <p> {pokemon["Generation"]}</p>
          </div>
          <div className="row col-12 col-sm-6">
            <strong>Evolution Stage: </strong>
            <p>{pokemon["Evolution_Stage"]}</p>
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
            <p>{pokemon["Cross_Gen"]}</p>
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
            <p>{pokemon["No_Gettable"]}</p>
          </div>
          <div className="row col-12 col-sm-6">
            <strong>Future Evolve: </strong>
            <p>{pokemon["Future_Evolve"]}</p>
          </div>
          <div className="row col-12 col-sm-6">
            <strong>100% CP @ 40: </strong>
            <p>{pokemon["At40"]}</p>
          </div>
          <div className="row col-12 col-sm-6">
            <strong>100% CP @ 39: </strong>
            <p>{pokemon["At39"]}</p>
          </div>

        </div>
        </div>
      
);
}