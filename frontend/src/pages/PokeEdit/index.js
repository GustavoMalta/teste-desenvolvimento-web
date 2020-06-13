import React, {useState, useEffect} from 'react';
import {useParams, useHistory} from 'react-router-dom';

import './styles.css';
import { FiArrowLeftCircle, FiTrash2 } from 'react-icons/fi';
import api from "../../services/api";
import Form from '../Form'



export default function PokeEdit(){
  
  const history = useHistory();

  const {id} = useParams();
  const [_id]= useState(id);
  
  async function handleDelete(data){
    console.log(data)
    const response = await api.delete('/pokemon/'+data);
    
    console.log(response.status);
    history.push('/');
  }
  /**async function handleUpdate(data){
    //const e = Event();
   // e.preventDefault();
    console.log(data)
    alert(data)
  
  }*/
  async function handleUpdate(data){

    //const data = {Name,Pokedex_Number,Img_name,Generation,Evolution_Stage,Evolved,FamilyID,Cross_Gen,Type_1,Type_2,Weather_1,Weather_2,STAT_TOTAL,ATK,DEF,STA,Legendary,Aquireable,Spawns,Regional,Raidable,Hatchable,Shiny,Nest,New,Not_Gettable,Future_Evolve,At40,At39};
    data.STAT_TOTAL = Number(data.ATK)+Number(data.DEF)+Number(data.STA) //nao tava sanvando so com o formulario
    console.log("Total" + data.STAT_TOTAL );

    let response
    try{
        response = await api.put('/pokemon/'+id, data);
    }catch(err){
      console.log(err)
      alert(`Falha na Atualização`);
    }
    if(response){
      alert(`${data.Name} Atualizado com sucesso!!`)
      history.goBack();
    }
      
  }

  async function handleToDetail(){
    history.goBack();
  }
        
//Row,Name,Pokedex_Number,Img_name,Generation,Evolution_Stage,Evolved,FamilyID,Cross_Gen,Type_1,Type_2,Weather_1,Weather_2,STAT_TOTAL,ATK,DEF,STA,Legendary,Aquireable,Spawns,Regional,Raidable,Hatchable,Shiny,Nest,New,Not_Gettable,Future_Evolve,At40,At39

  

return(
  <div className="card my-5 col-md-7 col-12 shadow">

    <Form pokeid={_id} 
          change={handleUpdate} 
          back={handleToDetail} 
          backText={"Voltar para os detalhes"}/>

    <div className="d-flex justify-content-center pt-4">
        <FiTrash2  onClick={() =>handleDelete(_id)}/>
    </div> 

  </div>     
);
}
