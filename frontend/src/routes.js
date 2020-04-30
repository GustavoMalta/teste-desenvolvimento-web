import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import PokeList from './pages/PokeList';
import PokeDetail from './pages/PokeDetail';
import PokeInsert from './pages/PokeInsert';


export default function Routes(){
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={PokeList}/>
            <Route path="/Pokemon/:id" component={PokeDetail}/>
            <Route path="/NewPokemon" component={PokeInsert}/>
            {/*<Route path="/profile" component={Profile}/>
            <Route path="/incident/new" component={NewIncident}/>*/}
        </Switch>
        </BrowserRouter>
    );
}
