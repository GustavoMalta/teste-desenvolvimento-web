import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import PokeList from './pages/PokeList';
import PokeDetail from './pages/PokeDetail';
import PokeInsert from './pages/PokeInsert';
import PokeEdit from './pages/PokeEdit';


export default function Routes(){
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={PokeList}/>
            <Route path="/page/:page" component={PokeList}/>
            <Route path="/Pokemon/:id" exact component={PokeDetail}/>
            <Route path="/Pokemon/Edit/:id" component={PokeEdit}/>
            <Route path="/CreatePokemon" component={PokeInsert}/>
        </Switch>
        </BrowserRouter>
    );
}
