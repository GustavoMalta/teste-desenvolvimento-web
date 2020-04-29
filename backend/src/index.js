const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
//const {errors} = require('celebrate');

const app = express();

               
mongoose.connect('mongodb+srv://pokeuser:pokepassword@pokeredfox-8ofck.mongodb.net/pokemon?retryWrites=true&w=majority',{
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});
console.log("sucesso");
//app.use(cors({origin:'localhost:3000'}));
app.use(cors());
app.use(express.json());
app.use(routes);   
app.listen(3333);

//server.listen(3333);

/*

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(errors())

*/