import React,{useEffect, useState} from 'react';

import './App.css';
import PokeList from "./pages/PokeList"
import Routes from './routes';
import { Router } from 'react-router-dom';

function App(){

  return(
    <div id="app" className="col-12 d-flex justify-content-center">
    
    <Routes/>
    </div>
  )

}
export default App;
