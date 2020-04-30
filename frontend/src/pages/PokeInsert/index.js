import React,{useEffect, useState} from 'react';
import {Link, useHistory, useParams} from 'react-router-dom';

import './styles.css';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import api from "../../services/api";


export default function PokeInsert(){
  const history = useHistory();
        const [Row,SetRow]= useState([]);
        const [Name, setName]= useState([]);
        const [Pokedex_Number,setPokedex_Number]= useState([]);
        const [Img_name, setImg_name]= useState([]);
        const [Generation, setGeneration]= useState([]);
        const [Evolution_Stage, setEvolution_Stage]= useState([]);
        const [Evolved, setEvolved]= useState([]);
        const [FamilyID, setFamilyID]= useState([]);
        const [Cross_Gen, setCross_Gen]= useState([]);

  async function handleRegister(e){
    e.preventDefault();
    const data = {Name,Row,Pokedex_Number,Img_name,Generation,Evolution_Stage,Evolved,FamilyID,Cross_Gen};
    let response;
    try{
        response = await api.post('/ongs', data);
    }catch{
        alert(`Erro no cadastro: ${response.status}`)
    }
        alert(`Cadastrado com sucesso: ${response.data.id}`)
        console.log(response);
        history.push('/');
  } 

return(
  <div className="card my-5 shadow">
        <div className="cart-title p-4">
          <h3>HEllo</h3>
          <h5 className="text-right">World</h5>
        </div>
  </div>
      
);
}