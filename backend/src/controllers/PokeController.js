const Pokemon = require('../models/pokemon');
const {types, weather} = require('../models/consts');

module.exports = {
    async index(req, res){
        const Pokemons = await Pokemon.find();
        console.log(types);
        return res.json(Pokemons);
    },
    async types(req, res){
        const Types = types;
        console.log(types);
        return res.json(Types);
    },
    async weathers(req, res){
        const Weather = weather;
        console.log(Weather);
        return res.json(Weather);
    },

    async create(req, res){
        const data = req.body;
        const pokedex = data["Pokedex_Number"];
    try{
        let poke = await Pokemon.findOne({pokedex});
            console.log("poke"+poke)
        if (!poke){           //se nao encontrar na lista
        
            const response = await Pokemon.find();
            
            
            data.row = (response.data)?response.data.length+1:0;
            data.Img_name = data.Pokedex_Number;
            console.log("pokedex: " + data.Pokedex_Number.length)
            while(data.Img_name.length<3){
                data.Img_name = '0'+data.Img_name
                console.log(data.Img_name)
            }
            
            console.log("number: " + data.Pokedex_Number)
            // talves um get para imagem
            // verificar se o tipo existe na lista
            poke = await Pokemon.create(data);
            console.log ("Pokemon Criado");

            }else{
                console.log ("Pokemon Ja existe com esse código Pokedex");
            }
            
        return res.json(poke);
    }catch{
        return res.json({});
    }
    },

    async edit(req, res){
        
        //https://assets.pokemon.com/assets/cms2/img/pokedex/full/214.png

        const {_id} = req.params;
        let poke;
        try{
            poke = await Pokemon.findOne({_id});
            console.log('Pokemon Encontrado: ' + poke.Name)
        }catch{
            console.log('Pokemon Não Encontrado: ' + _id)
        }
        
        return res.json(poke);
    },

    async update(req, res){
        const {_id} = req.params;
        const data = req.body;

        let poke = await Pokemon.findOne({_id});

        if (poke){  
            console.log(types.indexOf(data["Type 1"])); //if para validar os types
            console.log(data["Pokedex Number"])
            console.log(poke["Pokedex Number"])
            if(data["Pokedex Number"]==poke["Pokedex Number"]){
            
            poke = await Pokemon.updateOne(data)
            console.log ("Pokemon Atualizado");
            
            }
            

        }else{
            console.log ("Falha na Atualização");
        }
        return res.json(poke);
    
    },

    async delete(req, res){
        const {_id} = req.params;
        let poke = await Pokemon.findOne({_id});
        if (poke){
            try{
                await Pokemon.deleteOne({_id});
                console.log("Pokemon: "+ poke.Name + " deletado")
            }catch(e){
                console.log(e);
            }
        }else{
            console.log('Pokemon não localizado: ' + _id)
        }
        return res.json(poke);
    }

}