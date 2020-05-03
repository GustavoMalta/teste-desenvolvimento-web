import React,{useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';

import './styles.css';
import { FiArrowLeftCircle } from 'react-icons/fi';
import api from "../../services/api";



export default function PokeInsert(){
  const [Types, setTypes]= useState([]);
  const [Weather, setWeather]= useState([]);
  

        const history = useHistory();
        const [Row]= useState("");
        const [Name, setName]= useState("");
        const [Pokedex_Number,setPokedex_Number]= useState("");
        const [Img_name, setImg_name]= useState("");
        const [Generation, setGeneration]= useState("");
        const [Evolution_Stage, setEvolution_Stage]= useState("");
        const [Evolved, setEvolved]= useState("");
        const [FamilyID, setFamilyID]= useState("");
        const [Cross_Gen, setCross_Gen]= useState("");
        const [Type_1, setType_1]= useState("grass");
        const [Type_2, setType_2]= useState("");    
        const [Weather_1, setWeather_1]= useState("Sunny/clear");
        const [Weather_2, setWeather_2]= useState("");
        const [STAT_TOTAL, setSTAT_TOTAL]= useState("")
        const [ATK, setATK]= useState("");
        const [DEF, setDEF]= useState("");
        const [STA, setSTA]= useState("");
        const [Legendary, setLegendary]= useState("");
        const [Aquireable, setAquireable]= useState("");
        const [Spawns, setSpawns]= useState("");
        const [Regional, setRegional]= useState("");
        const [Raidable, setRaidable]= useState("");
        const [Hatchable, setHatchable]= useState("");
        const [Shiny, setShiny]= useState("");
        const [Nest, setNest]= useState("");
        const [New, setNew]= useState("");
        const [Not_Gettable, setNot_Gettable]= useState("");
        const [Future_Evolve, setFuture_Evolve]= useState("");
        const [At40, setAt40]= useState("");
        const [At39, setAt39]= useState("");
        
//Row,Name,Pokedex_Number,Img_name,Generation,Evolution_Stage,Evolved,FamilyID,Cross_Gen,Type_1,Type_2,Weather_1,Weather_2,STAT_TOTAL,ATK,DEF,STA,Legendary,Aquireable,Spawns,Regional,Raidable,Hatchable,Shiny,Nest,New,Not_Gettable,Future_Evolve,At40,At39

  useEffect(() =>{
    async function loadConsts(){
      const type = await api.get('/types');
      const weather = await api.get('/weathers');
      setTypes(type.data);
      setWeather(weather.data);
    } 
    loadConsts();
  },[]);


  async function handleRegister(e){
    e.preventDefault();
    
    const data = {Row,Name,Pokedex_Number,Img_name,Generation,Evolution_Stage,Evolved,FamilyID,Cross_Gen,Type_1,Type_2,Weather_1,Weather_2,STAT_TOTAL,ATK,DEF,STA,Legendary,Aquireable,Spawns,Regional,Raidable,Hatchable,Shiny,Nest,New,Not_Gettable,Future_Evolve,At40,At39};
    data.STAT_TOTAL = Number(ATK)+Number(DEF)+Number(STA) 
    
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

  async function handleBack(){
    history.goBack();
  }


return(
  
  <div className="card my-5 col-md-7 col-12 shadow">
    <form onSubmit={handleRegister} className="row"> 
      <div className="card-title px-4 mb-4 col-12 shadow-sm">
          <div className="py-3 d-flex justify-content-between">
            
            <span className="btn text-info" onClick={() =>handleBack()}>
              <FiArrowLeftCircle size={20} color="#17a2b8"/>Voltar para os detalhes
            </span>

            <button className="btn btn-success" type="submit">Salvar</button>
          </div>
      </div>
        
        <div className="input-group pb-2 col-12 col-md-6">
          <div className="input-group-prepend">
            <label className="input-group-text">Nome: </label>  
          </div>             
          <input placeholder="Nome"
                  required
                  className="form-control text-capitalize"
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
                  type="number"
                  value={Pokedex_Number}
                  onChange={e=>setPokedex_Number(e.target.value)}/>
         </div>
         <div className="input-group pb-2 col-12 col-md-6">
          <div className="input-group-prepend">
            <strong className="input-group-text">Type: </strong>  
          </div> 
          <select value={Type_1} className="form-control text-capitalize" onChange={e=>setType_1(e.target.value)}>
            {Types.map(type =>(
                  <option  key={type} value={type}>{type}</option>
              ))}
          </select>
          <select value={Type_2} className="form-control text-capitalize" onChange={e=>setType_2(e.target.value)}>
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
          <select value={Weather_1} className="form-control text-capitalize" onChange={e=>setWeather_1(e.target.value)}>
            {Weather.map(weather =>(                 
                  <option  key={weather} value={weather}>{weather}</option>
              ))}
          </select>
          <select value={Weather_2} className="form-control text-capitalize" onChange={e=>setWeather_2(e.target.value)}>
                  <option value=""></option>
            {Weather.map(weather =>(
                  <option  key={weather} value={weather}>{weather}</option>
              ))}
          </select>
        </div>
        <div className="input-group pb-2 col-12 col-md-6 justify-content-between">
          <div className="input-group-prepend col-md-4 p-0 pr-1">
            <strong className="input-group-text">ATK: </strong>  
            <input placeholder="ATK"
                    required
                    className="form-control  p-0 text-center stats"
                    type="number"
                    value={ATK}
                    onChange={e=>setATK(e.target.value)}/>
                  
          </div> 
          <div className="input-group-prepend col-md-4 p-0 pr-1">
            <strong className="input-group-text">DEF: </strong>  
            <input placeholder="DEF"
                    required
                    className="form-control  p-0 text-center stats"
                    type="number"
                    value={DEF}
                    onChange={e=>setDEF(e.target.value)}/>
          </div> 
                  
          <div className="input-group-prepend col-md-4 p-0">
            <strong className="input-group-text">STA: </strong>
            <input placeholder="STA"
                    required
                    className="form-control p-0 text-center stats"
                    type="number"
                    value={STA}
                    onChange={e=>setSTA(e.target.value)}/>  
          </div> 
          </div>

          <div className="input-group pb-2 col-12 col-md-6">
          <div className="input-group-prepend">
            <strong className="input-group-text">STAT_TOTAL: </strong>  
          </div> 
          <input placeholder="STAT_TOTAL"
                  required
                  disabled
                  className="form-control"
                  value={Number(ATK)+Number(DEF)+Number(STA)}
                  onChange={e=>setSTAT_TOTAL(e.target.value)}/>
          </div>
          <div className="input-group pb-2 col-12 col-md-6">
          <div className="input-group-prepend">
            <strong className="input-group-text">Generation/Evolution_Stage: </strong>  
          </div>
              <input placeholder="Generation"
                  required
                  className="form-control"
                  type="number"
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
                  type="number"
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
                  type="number"
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
                  type="number"
                  value={Cross_Gen}
                  onChange={e=>setCross_Gen(e.target.value)}/>
          </div>
         <div className="input-group pb-2 col-12 col-md-6">
          <div className="input-group-prepend">
            <strong className="input-group-text">Legendary: </strong>  
          </div> 
          <input placeholder="Legendary"
                  required
                  className="form-control"
                  type="number"
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
                  type="number"
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
                  type="number"
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
                  type="number"
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
                  type="number"
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
                  type="number"
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
                  type="number"
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
                  type="number"
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
                  type="number"
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
                  type="number"
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
                  type="number"
                  value={Future_Evolve}
                  onChange={e=>setFuture_Evolve(e.target.value)}/>
          </div>
         <div className="input-group pb-2 col-12 col-md-6">
          <div className="input-group-prepend col-md-6 p-0 pr-1">
            <strong className="input-group-text">At40: </strong>  
            <input placeholder="At40"
                    required
                    className="form-control w-50"
                    type="number"
                    value={At40}
                    onChange={e=>setAt40(e.target.value)}/>
          </div> 
          <div className="input-group-prepend col-md-6 p-0  justify-content-end">
            <strong className="input-group-text">At39: </strong>  
            <input placeholder="At39"
                    required
                    className="form-control w-50"
                    type="number"
                    value={At39}
                    onChange={e=>setAt39(e.target.value)}/>
          </div> 
          </div>
          </form>
      </div>     
);
}
