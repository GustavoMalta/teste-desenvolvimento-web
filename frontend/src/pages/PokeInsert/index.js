import React,{useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';

import './styles.css';
import api from "../../services/api";
import Form from  '../Form'



export default function PokeInsert(){
  

  const history = useHistory();

  async function handleRegister(data){
    
    //const data = {Row,Name,Pokedex_Number,Img_name,Generation,Evolution_Stage,Evolved,FamilyID,Cross_Gen,Type_1,Type_2,Weather_1,Weather_2,STAT_TOTAL,ATK,DEF,STA,Legendary,Aquireable,Spawns,Regional,Raidable,Hatchable,Shiny,Nest,New,Not_Gettable,Future_Evolve,At40,At39};
    data.STAT_TOTAL = Number(data.ATK)+Number(data.DEF)+Number(data.STA) 
    
    let response

    try{
      console.log(data)
        response = await api.post('/pokemons/', data);
        console.log(response)
    }catch(err){
      console.log(err)
      alert(`Pokemon ja esta cadastrado`);
    }
    if(response){
      alert(`${response.data.Name} Cadastrado com sucesso!!`)
      history.push('/');
    }
  }

  async function handleToDetail(){
    history.goBack();
  }


return(
  
  <div className="card my-5 col-md-7 col-12 shadow">

    <Form change={handleRegister} 
          back={handleToDetail} 
          backText={"Voltar para a lista"}/>
  
  </div>     
);
}
