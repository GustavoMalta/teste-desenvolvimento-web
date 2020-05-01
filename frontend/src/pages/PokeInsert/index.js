import React,{useState, useEffect, Form} from 'react';
import {useHistory} from 'react-router-dom';

import './styles.css';
//import { FiPower, FiTrash2 } from 'react-icons/fi';
import api from "../../services/api";



export default function PokeInsert(){
  const [Types, setTypes]= useState([]);
  const [Weather, setWeather]= useState([]);
  
  useEffect(() =>{
    async function loadConsts(){
      const type = await api.get('/types');
      const weather = await api.get('/weathers');
      setTypes(type.data);
      setWeather(weather.data);
    } 
    loadConsts();
  },[]);

  const history = useHistory();
        const [Row]= useState("");
        const [Name, setName]= useState("Bulbasaur");
        const [Pokedex_Number,setPokedex_Number]= useState("1");
        const [Img_name, setImg_name]= useState("1");
        const [Generation, setGeneration]= useState("1");
        const [Evolution_Stage, setEvolution_Stage]= useState("1");
        const [Evolved, setEvolved]= useState("0");
        const [FamilyID, setFamilyID]= useState("1");
        const [Cross_Gen, setCross_Gen]= useState("0");
        const [Type_1, setType_1]= useState("grass");
        const [Type_2, setType_2]= useState("poison");    
        const [Weather_1, setWeather_1]= useState("Sunny/clear");
        const [Weather_2, setWeather_2]= useState("Cloudy");
        const [STAT_TOTAL, setSTAT_TOTAL]= useState("326");
        const [ATK, setATK]= useState("118");
        const [DEF, setDEF]= useState("118");
        const [STA, setSTA]= useState("90");
        const [Legendary, setLegendary]= useState("0");
        const [Aquireable, setAquireable]= useState("1");
        const [Spawns, setSpawns]= useState("1");
        const [Regional, setRegional]= useState("0");
        const [Raidable, setRaidable]= useState("0");
        const [Hatchable, setHatchable]= useState("5");
        const [Shiny, setShiny]= useState("0");
        const [Nest, setNest]= useState("1");
        const [New, setNew]= useState("0");
        const [Not_Gettable, setNot_Gettable]= useState("0");
        const [Future_Evolve, setFuture_Evolve]= useState("0");
        const [At40, setAt40]= useState("981");
        const [At39, setAt39]= useState("867");
        
//Row,Name,Pokedex_Number,Img_name,Generation,Evolution_Stage,Evolved,FamilyID,Cross_Gen,Type_1,Type_2,Weather_1,Weather_2,STAT_TOTAL,ATK,DEF,STA,Legendary,Aquireable,Spawns,Regional,Raidable,Hatchable,Shiny,Nest,New,Not_Gettable,Future_Evolve,At40,At39

  async function handleRegister(e){
    e.preventDefault();

    const data = {Row,Name,Pokedex_Number,Img_name,Generation,Evolution_Stage,Evolved,FamilyID,Cross_Gen,Type_1,Type_2,Weather_1,Weather_2,STAT_TOTAL,ATK,DEF,STA,Legendary,Aquireable,Spawns,Regional,Raidable,Hatchable,Shiny,Nest,New,Not_Gettable,Future_Evolve,At40,At39};
    
    console.log(data);
    let response

    try{
        response = await api.post('/pokemons', data);
    }catch(err){
      console.log(err)
      alert(`Pokemon ja esta cadastrado`);
    }
    if(response){
      alert(`${response.data.Name} Cadastrado com sucesso!!`)
      history.push('/');
    }
      
  } 

return(
  <div className="card my-5 shadow">
      <div className="cart-title p-4">
        <form onSubmit={handleRegister} className="row"> 
        <div className="input-group pb-2 col-12 col-md-6">
          <div className="input-group-prepend">
            <label className="input-group-text">Nome: </label>  
          </div>             
          <input placeholder="Nome"
                  required
                  className="form-control"
                  value={Name}
                  onChange={e=>setName(e.target.value)}/>
        </div>
        <div className="input-group pb-2 col-12 col-md-6">
          <div className="input-group-prepend">
            <strong className="input-group-text">Pokedex_Number: </strong>  
          </div> 
          <input placeholder="Pokedex_Number"
                  required
                  className="form-control"
                  value={Pokedex_Number}
                  onChange={e=>setPokedex_Number(e.target.value)}/>
         </div>
         <div className="input-group pb-2 col-12 col-md-6">
          <div className="input-group-prepend">
            <strong className="input-group-text">Type: </strong>  
          </div> 
          <select value={Type_1} className="form-control" onChange={e=>setType_1(e.target.value)}>
            {Types.map(type =>(
                  <option  key={type} value={type}>{type}</option>
              ))}
          </select>
          <select value={Type_2} className="form-control" onChange={e=>setType_2(e.target.value)}>
                  <option value=""></option>
            {Types.map(type =>(
                  <option  key={type} value={type}>{type}</option>
              ))}
          </select>
        </div>
        <div className="input-group pb-2 col-12 col-md-6">
          <div className="input-group-prepend">
            <strong className="input-group-text">Weather: </strong>  
          </div> 
          <select value={Weather_1} className="form-control" onChange={e=>setWeather_1(e.target.value)}>
            {Weather.map(weather =>(
                  <option  key={weather} value={weather}>{weather}</option>
              ))}
          </select>
          <select value={Weather_2} className="form-control" onChange={e=>setWeather_2(e.target.value)}>
                  <option value=""></option>
            {Weather.map(weather =>(
                  <option  key={weather} value={weather}>{weather}</option>
              ))}
          </select>
        </div>
        <div className="input-group pb-2 col-12 col-md-6 d-none">
          <div className="input-group-prepend">
            <strong className="input-group-text">Img_name: </strong>  
          </div> 
          <input placeholder="Img_name"
                  required
                  className="form-control"
                  value={Img_name}
                  onChange={e=>setImg_name(e.target.value)}/>
          </div>
          <div className="input-group pb-2 col-12 col-md-6">
          <div className="input-group-prepend">
            <strong className="input-group-text">Generation/Evolution_Stage: </strong>  
          </div>
              <input placeholder="Generation"
                  required
                  className="form-control"
                  value={Generation}
                  onChange={e=>setGeneration(e.target.value)}/>
              <input placeholder="Evolution_Stage" className="text-capitalize"
                  required
                  className="form-control"
                  value={Evolution_Stage}
                  onChange={e=>setEvolution_Stage(e.target.value)}/> 
          </div>

        <div className="input-group pb-2 col-12 col-md-6">
          <div className="input-group-prepend">
            <strong className="input-group-text">Evolved: </strong>  
          </div> 
          <input placeholder="Evolved"
                  required
                  className="form-control"
                    value={Evolved}
                    onChange={e=>setEvolved(e.target.value)}/>
          </div>
        <div className="input-group pb-2 col-12 col-md-6">
          <div className="input-group-prepend">
            <strong className="input-group-text">FamilyID: </strong>  
          </div> 
          <input placeholder="FamilyID"
                  required
                  className="form-control"
                    value={FamilyID}
                    onChange={e=>setFamilyID(e.target.value)}/>
          </div>
          <div className="input-group pb-2 col-12 col-md-6">
            <div className="input-group-prepend">
              <strong className="input-group-text">Cross_Gen: </strong>  
            </div> 
          <input placeholder="Cross_Gen"
                  required
                  className="form-control"
                    value={Cross_Gen}
                    onChange={e=>setCross_Gen(e.target.value)}/>
          </div>
         <div className="input-group pb-2 col-12 col-md-6">
          <div className="input-group-prepend">
            <strong className="input-group-text">STAT_TOTAL: </strong>  
          </div> 
          <input placeholder="STAT_TOTAL"
                  required
                  className="form-control"
                    value={STAT_TOTAL}
                    onChange={e=>setSTAT_TOTAL(e.target.value)}/>
          </div>
         <div className="input-group pb-2 col-12 col-md-6">
          <div className="input-group-prepend">
            <strong className="input-group-text">ATK: </strong>  
          </div> 
          <input placeholder="ATK"
                  required
                  className="form-control"
                    value={ATK}
                    onChange={e=>setATK(e.target.value)}/>
          </div>
         <div className="input-group pb-2 col-12 col-md-6">
          <div className="input-group-prepend">
            <strong className="input-group-text">DEF: </strong>  
          </div> 
          <input placeholder="DEF"
                  required
                  className="form-control"
                    value={DEF}
                    onChange={e=>setDEF(e.target.value)}/>
          </div>
         <div className="input-group pb-2 col-12 col-md-6">
          <div className="input-group-prepend">
            <strong className="input-group-text">STA: </strong>  
          </div> 
          <input placeholder="STA"
                  required
                  className="form-control"
                    value={STA}
                    onChange={e=>setSTA(e.target.value)}/>
          </div>
         <div className="input-group pb-2 col-12 col-md-6">
          <div className="input-group-prepend">
            <strong className="input-group-text">Legendary: </strong>  
          </div> 
          <input placeholder="Legendary"
                  required
                  className="form-control"
                    value={Legendary}
                    onChange={e=>setLegendary(e.target.value)}/>
          </div>
         <div className="input-group pb-2 col-12 col-md-6">
          <div className="input-group-prepend">
            <strong className="input-group-text">Aquireable: </strong>  
          </div> 
          <input placeholder="Aquireable"
                  required
                  className="form-control"
                    value={Aquireable}
                    onChange={e=>setAquireable(e.target.value)}/>
          </div>
         <div className="input-group pb-2 col-12 col-md-6">
          <div className="input-group-prepend">
            <strong className="input-group-text">Spawns: </strong>  
          </div> 
          <input placeholder="Spawns"
                  required
                  className="form-control"
                    value={Spawns}
                    onChange={e=>setSpawns(e.target.value)}/>
          </div>
         <div className="input-group pb-2 col-12 col-md-6">
          <div className="input-group-prepend">
            <strong className="input-group-text">Regional: </strong>  
          </div> 
          <input placeholder="Regional"
                  required
                  className="form-control"
                    value={Regional}
                    onChange={e=>setRegional(e.target.value)}/>
          </div>
         <div className="input-group pb-2 col-12 col-md-6">
          <div className="input-group-prepend">
            <strong className="input-group-text">Raidable: </strong>  
          </div> 
          <input placeholder="Raidable"
                  required
                  className="form-control"
                    value={Raidable}
                    onChange={e=>setRaidable(e.target.value)}/>
          </div>
         <div className="input-group pb-2 col-12 col-md-6">
          <div className="input-group-prepend">
            <strong className="input-group-text">Hatchable: </strong>  
          </div> 
          <input placeholder="Hatchable"
                  required
                  className="form-control"
                    value={Hatchable}
                    onChange={e=>setHatchable(e.target.value)}/>
          </div>
         <div className="input-group pb-2 col-12 col-md-6">
          <div className="input-group-prepend">
            <strong className="input-group-text">Shiny: </strong>  
          </div> 
          <input placeholder="Shiny"
                  required
                  className="form-control"
                    value={Shiny}
                    onChange={e=>setShiny(e.target.value)}/>
          </div>
         <div className="input-group pb-2 col-12 col-md-6">
          <div className="input-group-prepend">
            <strong className="input-group-text">Nest: </strong>  
          </div> 
          <input placeholder="Nest"
                  required
                  className="form-control"
                    value={Nest}
                    onChange={e=>setNest(e.target.value)}/>
          </div>
         <div className="input-group pb-2 col-12 col-md-6">
          <div className="input-group-prepend">
            <strong className="input-group-text">New: </strong>  
          </div> 
          <input placeholder="New"
                  required
                  className="form-control"
                    value={New}
                    onChange={e=>setNew(e.target.value)}/>
          </div>
         <div className="input-group pb-2 col-12 col-md-6">
          <div className="input-group-prepend">
            <strong className="input-group-text">Not_Gettable: </strong>  
          </div> 
          <input placeholder="Not_Gettable"
                  required
                  className="form-control"
                    value={Not_Gettable}
                    onChange={e=>setNot_Gettable(e.target.value)}/>
          </div>
         <div className="input-group pb-2 col-12 col-md-6">
          <div className="input-group-prepend">
            <strong className="input-group-text">Future_Evolve: </strong>  
          </div> 
          <input placeholder="Future_Evolve"
                  required
                  className="form-control"
                  value={Future_Evolve}
                  onChange={e=>setFuture_Evolve(e.target.value)}/>
          </div>
         <div className="input-group pb-2 col-12 col-md-6">
          <div className="input-group-prepend">
            <strong className="input-group-text">At40: </strong>  
          </div> 
          <input placeholder="At40"
                  required
                  className="form-control"
                    value={At40}
                    onChange={e=>setAt40(e.target.value)}/>
          </div>
         <div className="input-group pb-2 col-12 col-md-6">
          <div className="input-group-prepend">
            <strong className="input-group-text">At39: </strong>  
          </div> 
          <input placeholder="At39"
                  required
                  className="form-control"
                    value={At39}
                    onChange={e=>setAt39(e.target.value)}/>
          </div>
         {//Stage,Evolved,FamilyID,Cross_Gen
         }
          <button className="btn btn-success" type="submit">Cadastrar</button>
          </form>
      </div>
  </div>
      
);
}