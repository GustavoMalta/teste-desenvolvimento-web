const {Router}  = require('express');
const PokeController = require('./controllers/PokeController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

routes.get('/', (request, response) => {
    console.log(request.params);
    return response.json({'Mensagem de olá': 'Hello Mundo!!'});
});

routes.get('/pokemons/:page', PokeController.index);
routes.get('/pokemons', PokeController.index);
routes.post('/pokemons', PokeController.create);

routes.get('/pokemon/:_id', PokeController.edit);
routes.put('/pokemon/:_id', PokeController.update);
routes.delete('/pokemon/:_id', PokeController.delete);

routes.get('/search', SearchController.search);

routes.get('/types', PokeController.types);
routes.get('/weathers', PokeController.weathers);

module.exports = routes;