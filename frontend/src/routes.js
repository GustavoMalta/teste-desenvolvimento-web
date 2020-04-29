import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import PokeList from './pages/PokeList';

export default function Routes(){
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" component={PokeList}/>
            {/*<Route path="/Pokemons" component={Register}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/incident/new" component={NewIncident}/>*/}
        </Switch>
        </BrowserRouter>
    );
}
