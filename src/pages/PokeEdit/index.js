import React, {useState, useEffect} from 'react';
import { Button, Confirm } from 'semantic-ui-react'
import {useParams, useHistory} from 'react-router-dom';

import './styles.css';
import { FiSave, FiTrash2 } from 'react-icons/fi';
import api from "../../services/api";
import Form from '../Form'



export default function PokeEdit(){
  
  const history = useHistory();

  const {id} = useParams();
  const [_id]= useState(id);
  const [dialog, setdialog]= useState(false);
  
  async function handleDelete(data){
    
    console.log(data)
    const response = await api.delete('/pokemon/'+_id);
    
    alert("Pokemon Deletado")
    console.log(response.status);
    history.push('/')
  }
  
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

    <div className="d-flex btn justify-content-end text-danger p-4">

        <div className="d-flex btn btn-danger justify-content-end" onClick={()=>setdialog(true)}>
          <FiTrash2 className="my-1"/> 
          <span> Excluir</span>
        </div>
        <Confirm
          open={dialog}
          onCancel={()=>setdialog(false)}
          header="Deletar Pokemon"
          content='Deseja realmente deletar?'
          cancelButton='Cancelar'
          confirmButton="Deletar"
          onConfirm={()=>handleDelete()}
          backText={"asdadas"}
        />
    </div> 

  </div>     
);
}
