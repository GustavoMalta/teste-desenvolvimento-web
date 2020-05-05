const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb+srv://pokeuser:pokepassword@redfox-hcna2.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});
console.log("sucesso");

app.use(cors());
app.use(express.json());
app.use(routes); 
app.listen(process.env.PORT || 3333);

