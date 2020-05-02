import React,{useState, useEffect} from 'react';
import {useParams, useHistory} from 'react-router-dom';

import './styles.css';
import { FiArrowLeftCircle, FiTrash2 } from 'react-icons/fi';
import api from "../../services/api";



export default function PokeEdit(){
  const {id} = useParams();
  const history = useHistory();
  const [Types, setTypes]= useState([]);
  const [Weather, setWeather]= useState([]);

  const [_id]= useState(id);
  const [Name, setName]= useState([]);
  const [Pokedex_Number,setPokedex_Number]= useState([]);
  const [Img_name, setImg_name]= useState([]);
  const [Generation, setGeneration]= useState([]);
  const [Evolution_Stage, setEvolution_Stage]= useState([]);
  const [Evolved, setEvolved]= useState([]);
  const [FamilyID, setFamilyID]= useState([]);
  const [Cross_Gen, setCross_Gen]= useState([]);
  const [Type_1, setType_1]= useState([]);
  const [Type_2, setType_2]= useState([]);    
  const [Weather_1, setWeather_1]= useState([]);
  const [Weather_2, setWeather_2]= useState([]);
  const [STAT_TOTAL, setSTAT_TOTAL]= useState([]);
  const [ATK, setATK]= useState([]);
  const [DEF, setDEF]= useState([]);
  const [STA, setSTA]= useState([]);
  const [Legendary, setLegendary]= useState([]);
  const [Aquireable, setAquireable]= useState([]);
  const [Spawns, setSpawns]= useState([]);
  const [Regional, setRegional]= useState([]);
  const [Raidable, setRaidable]= useState([]);
  const [Hatchable, setHatchable]= useState([]);
  const [Shiny, setShiny]= useState([]);
  const [Nest, setNest]= useState([]);
  const [New, setNew]= useState([]);
  const [Not_Gettable, setNot_Gettable]= useState([]);
  const [Future_Evolve, setFuture_Evolve]= useState([]);
  const [At40, setAt40]= useState([]);
  const [At39, setAt39]= useState([]);

  useEffect(() =>{
    async function loadPoke(){
      const response = await api.get('/pokemon/'+id);
      const type = await api.get('/types');
      const weather = await api.get('/weathers');
      console.log(response)
      setTypes(type.data);
      setWeather(weather.data);

      setName(response.data.Name);
      setPokedex_Number(response.data.Pokedex_Number);
      setImg_name(response.data.Img_name);
      setGeneration(response.data.Generation);
      setEvolution_Stage(response.data.Evolution_Stage);
      setEvolved(response.data.Evolved);
      setFamilyID(response.data.FamilyID);
      setCross_Gen(response.data.Cross_Gen);
      setType_1(response.data.Type_1);
      setType_2(response.data.Type_2);    
      setWeather_1(response.data.Weather_1);
      setWeather_2(response.data.Weather_2);
      setSTAT_TOTAL(response.data.STAT_TOTAL);
      setATK(response.data.ATK);
      setDEF(response.data.DEF);
      setSTA(response.data.STA);
      setLegendary(response.data.Legendary);
      setAquireable(response.data.Aquireable);
      setSpawns(response.data.Spawns);
      setRegional(response.data.Regional);
      setRaidable(response.data.Raidable);
      setHatchable(response.data.Hatchable);
      setShiny(response.data.Shiny);
      setNest(response.data.Nest);
      setNew(response.data.New);
      setNot_Gettable(response.data.Not_Gettable);
      setFuture_Evolve(response.data.Future_Evolve);
      setAt40(response.data.At40);
      setAt39(response.data.At39);
console.log(_id)
    } 
    loadPoke();
  },[]);
  
  async function handleDelete(data){
    console.log(data)
    const response = await api.delete('/pokemon/'+data);
    
    console.log(response.status);
    history.push('/');
  }

  async function handleToDetail(){
    history.goBack();
  }
        
//Row,Name,Pokedex_Number,Img_name,Generation,Evolution_Stage,Evolved,FamilyID,Cross_Gen,Type_1,Type_2,Weather_1,Weather_2,STAT_TOTAL,ATK,DEF,STA,Legendary,Aquireable,Spawns,Regional,Raidable,Hatchable,Shiny,Nest,New,Not_Gettable,Future_Evolve,At40,At39

  async function handleUpdate(e){
    e.preventDefault();
    
    const data = {Name,Pokedex_Number,Img_name,Generation,Evolution_Stage,Evolved,FamilyID,Cross_Gen,Type_1,Type_2,Weather_1,Weather_2,STAT_TOTAL,ATK,DEF,STA,Legendary,Aquireable,Spawns,Regional,Raidable,Hatchable,Shiny,Nest,New,Not_Gettable,Future_Evolve,At40,At39};
    data.STAT_TOTAL = Number(ATK)+Number(DEF)+Number(STA) //nao tava sanvando so com o formulario

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

return(
  <div className="card my-5 col-md-7 col-12 shadow">
    <form onSubmit={handleUpdate} className="row"> 
      <div className="card-title px-4 mb-4 col-12 shadow-sm">
          <div className="py-3 d-flex justify-content-between">
            
            <span className="btn text-info" onClick={() =>handleToDetail()}>
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
                  type="number"
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
        <div className="input-group pb-2 col-12 col-md-6 justify-content-between">
          <div className="input-group-prepend col-md-4 p-0 pr-1">
            <strong className="input-group-text">ATK: </strong>  
            <input placeholder="ATK"
                    required
                    className="form-control  p-0 text-center"
                    type="number"
                    value={ATK}
                    onChange={e=>setATK(e.target.value)}/>
                  
          </div> 
          <div className="input-group-prepend col-md-4 p-0 pr-1">
            <strong className="input-group-text">DEF: </strong>  
            <input placeholder="DEF"
                    required
                    className="form-control  p-0 text-center"
                    type="number"
                    value={DEF}
                    onChange={e=>setDEF(e.target.value)}/>
          </div> 
                  
          <div className="input-group-prepend col-md-4 p-0">
            <strong className="input-group-text">STA: </strong>
            <input placeholder="STA"
                    required
                    className="form-control p-0 text-center"
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
                    className="form-control"
                    type="number"
                    value={At40}
                    onChange={e=>setAt40(e.target.value)}/>
          </div> 
          <div className="input-group-prepend col-md-6 p-0">
            <strong className="input-group-text">At39: </strong>  
            <input placeholder="At39"
                    required
                    className="form-control"
                    type="number"
                    value={At39}
                    onChange={e=>setAt39(e.target.value)}/>
          </div> 
          </div>
          </form>
          <div className="d-flex justify-content-center pt-4">
              <FiTrash2  onClick={() =>handleDelete(_id)}/>
          </div> 
      </div>     
);
}