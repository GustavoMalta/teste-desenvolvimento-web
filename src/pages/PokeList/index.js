import React,{useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';

import { Pagination } from 'semantic-ui-react'

import './styles.css';
import { FiSearch} from 'react-icons/fi';
import api from "../../services/api";


export default function PokeList(){
    const history = useHistory();
    const {page = 1} = useParams();
    const [pokemons, setPokemons] = useState([]);
    let [row, setRow] = useState(1);
    const [pages, setPages] = useState([]);
    const [activePage, setActivePage] = useState(1);
    const [search, setSearch] = useState('')
    const [total, setTotal] = useState([]);

    //let Total //= localStorage.getItem('X-Total-Pokes');

    useEffect(() =>{
      async function loadPokes(){
        
       const response =  await api.get('/Pokemons/'+ page,{
                                                      params:{
                                                        Name: search,
                                                      }
                                                    });
        
        localStorage.setItem('X-Total-Pokes',response.data.Total);
        setTotal(response.data.Total);
        setPokemons(response.data.Pokemons);
        setPages(response.data.Pages);
        console.log("Total: "+response.data.Total)
        console.log("Paginas: "+ response.data.Pages.length)
        console.log("Paginas: "+ response.data.Pages)
        setRow(((page-1)*10)+1)
      }
      loadPokes();
    },[page,search,activePage]);

    useEffect(() =>{
      async function search(e){
        if(page!=1){
          history.push('/page/1');
        }
      }
      search();
    },[search]);

  async function handleSearch(e){
    e.preventDefault();
    console.log(search.capitalize)
    //setPokemons([])
    
  }

  async function handleToDetail(id){
    history.push('/pokemon/'+ id)
    console.log(id);
  }
  async function handleToInsert(){
    history.push('/CreatePokemon');
  }
  async function handlePage(x){
    console.log(pages)
    history.push('/page/'+x);
  }
  async function onChange(e, pageInfo){
    setActivePage(pageInfo.activePage);
    history.push(`/page/${pageInfo.activePage}`);
  };

  return(
    <div className="card my-5 shadow">
      <div className="card-title d-flex justify-content-between p-3 m-0"> 
      <form onSubmit={handleSearch} className="row"> 
      <div className="input-group pb-3 col-12 col-md-11">
        <div className="input-group-prepend">
          <label className="input-group-text"><FiSearch/> Busca </label>  
        </div>            
        <input placeholder="Nome ou Codigo Pokedex"
                className="form-control pr-0"
                value={search}
                onChange={e=>setSearch(e.target.value.toLowerCase())}/>
      </div>
    </form>
        <button type="button" className="btn btn-success" onClick={() =>handleToInsert()}>
        Novo Pokemon
        </button>
      </div>
    <div id="app" className="col-12 d-flex justify-content-center">
   
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
                        <td>{row++}</td>
                        <td>{pokemon.Pokedex_Number}</td>
                        <td>
                          <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon.Img_name}.png`}
                                  alt={pokemon.Name}
                                  width="25"/>
                        </td>
                        <td className="text-capitalize">{pokemon["Name"]}</td>
                        <td>{pokemon["Type_1"]}</td>
                        <td>{pokemon["Type_2"]}</td>
                        <td>{pokemon["ATK"]}</td>
                        <td>{pokemon["DEF"]}</td>
                        <td>{pokemon["STA"]}</td>
                </tr>
                
          ))}
        </tbody>
      </table>

      <div className="card-title d-flex justify-content-center p-3 m-0"> 
        {/*pages.map(numero =>(
          <button type="button" className="btn btn-info mx-1" onClick={() =>handlePage(numero)}>
          {numero}
          </button>
        ))*/}
        <Pagination 
          defaultActivePage={activePage}
          className="ui pagination menu"
          onPageChange={onChange}
          totalPages={pages.length}
          ellipsisItem={null}
        />
      </div>
    </main>
    </div>

    </div>
  )

}
