const {Router}  = require('express');
const PokeController = require('./controllers/PokeController');

const routes = Router();

routes.get('/', (request, response) => {
    console.log(request.params);
    return response.json({'Mensagem de olá': 'Hello Mundo!!'});
});

routes.get('/pokemons', PokeController.index);
routes.post('/pokemons', PokeController.create);

routes.get('/pokemon/:_id', PokeController.edit);
routes.put('/pokemon/:_id', PokeController.update);
routes.delete('/pokemon/:_id', PokeController.delete);




routes.put('/put/:id', (request, response) => { 
    console.log(request.params);
    return response.json({'Mensagem de olá': 'Hello Mundo!!'});
}); 
routes.delete('/delete/:id', (request, response) => {
    console.log(request.params);
    return response.json({'Mensagem de olá': 'Hello Mundo!!'});
});

module.exports = routes;