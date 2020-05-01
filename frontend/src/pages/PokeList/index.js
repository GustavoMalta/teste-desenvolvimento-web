import React,{useEffect, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';

import './styles.css';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import api from "../../services/api";


export default function PokeList(){
    const history = useHistory();
    const [pokemons, setPokemons] = useState([]);

    useEffect(() =>{
      async function loadPokes(){
        const response = await api.get('/Pokemons');
        //console.log(this.props)
        setPokemons(response.data);
      } 
      loadPokes();
    },[]);

  async function handleDev(data){
    const response = await api.post('/devs',data);

    setPokemons([...pokemons,response.data])
    console.log(response.data);
  }

  async function handleToDetail(id){
    history.push('/pokemon/'+id)
    console.log(id);
  }
  async function handleToInsert(){
    history.push('/CreatePokemon');
  }

  return(
    <div className="card my-5 shadow">
      
    <div id="app" className="col-12 d-flex justify-content-center">
    <button type="button" className="btn btn-success" onClick={() =>handleToInsert()}>
      Create New
    </button>
    <main>
      <table className="table table-striped">
        <thead>
          <tr>
              <th>Row</th>
              <th>Pokedex Number</th>
              <th>Img name</th>
              <th>Name</th>
              <th>Type 1</th>
              <th>Type 2</th>
              <th>ATK</th>
              <th>DEF</th>
              <th>STA</th>
          </tr>
        </thead>
        <tbody>
          {pokemons.map(pokemon =>(
                    
                <tr key={pokemon._id} className="pokelist" onClick={() =>handleToDetail(pokemon._id)}>
                        <td className="d-none" key={pokemon["_id"]}>{pokemon._id}</td>
                        <td>{pokemon["Row"]}</td>
                        <td>{pokemon.Pokedex_Number}</td>
                        <td>{pokemon["Img_name"]}</td>
                        <td>{pokemon["Name"]}</td>
                        <td>{pokemon["Type_1"]}</td>
                        <td>{pokemon["Type_2"]}</td>
                        <td>{pokemon["ATK"]}</td>
                        <td>{pokemon["DEF"]}</td>
                        <td>{pokemon["STA"]}</td>
                </tr>
                
          ))}
        </tbody>
      </table>

    </main>
    </div>

    </div>
  )

}


/*
<table class="table table-striped">
  <thead>
    <tr>
        <th>Row</th>
        <th>Name</th>
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
    </tr>
  </thead>
  <tbody>
    {pokemons.map(pokemon =>(
    <tr>
        <li className="d-none" key={pokemon["_id"]}>{pokemon._id}</li>
        <td>{pokemon["Row"]}</td>
        <td>{pokemon["Name"]}</td>
        <td>{pokemon["Pokedex Number"]}</td>
        <td>{pokemon["Img name"]}</td>
        <td>{pokemon["Generation"]}</td>
        <td>{pokemon["Evolution Stage"]}</td>
        <td>{pokemon["Evolved"]}</td>
        <td>{pokemon["FamilyID"]}</td>
        <td>{pokemon["Cross Gen"]}</td>
        <td>{pokemon["Type 1"]}</td>
        <td>{pokemon["Type 2"]}</td>
        <td>{pokemon["Weather 1"]}</td>
        <td>{pokemon["Weather 2"]}</td>
        <td>{pokemon["STAT TOTAL"]}</td>
        <td>{pokemon["ATK"]}</td>
        <td>{pokemon["DEF"]}</td>
        <td>{pokemon["STA"]}</td>
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
    </tr>
    ))}
  </tbody>
  </table> */
