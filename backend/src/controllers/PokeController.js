const Pokemon = require('../models/pokemon');
const {types, weather} = require('../models/consts');

module.exports = {
    async index(req, res){
        const {page = 1 } = req.params;
        let {Name} = req.query;
        let object ={};
        const limit = 2
        console.log("page: " + page);
        if(Name){
            object = {"Name":{ $regex: Name, $options: Name }}
            console.log(object)
        }
        const Pages = [1]
        
        const Pokemons = await Pokemon.find({"Name":{ $regex: Name, $options: Name }})
                                    .skip((Number(page)-1)*limit)
                                    .limit(limit)
                                    .sort({'Name': 1});
        const Total = await Pokemon.find().count()

        while(Pages.length*limit < Total){
            Pages.push(Pages.length+1)
        }
        console.log(Total)

        return res.header("x-count", [123]).json({Pokemons, Total, Pages});
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
        const Pokedex_Number = data.Pokedex_Number;
    try{
        let poke = await Pokemon.findOne({Pokedex_Number});
            console.log("poke" + Pokedex_Number)
        if (!poke){           //se nao encontrar na lista
        
            /*const response = await Pokemon.find();
            
            data.Row = (response)?response.length+1:0;*/ //estou deixando o Row pra ser preenchido so na hora, no front

            data.Name=data.Name.toLowerCase();

            data.Img_name = data.Pokedex_Number;
            console.log("pokedex: " + data.Pokedex_Number.length)
            while(data.Img_name.length<3){
                data.Img_name = '0'+data.Img_name
            }
            
            console.log("number: " + data.Pokedex_Number)
            // talves um get para imagem
            // verificar se o tipo existe na lista
            poke = await Pokemon.create(data);
            console.log ("Pokemon Criado");

            }else{
                console.log ("Pokemon Ja existe com esse código Pokedex");
                return res.status(304).json(poke)
            }
            
        return res.json(poke);
    }catch{
        return res.status(400).json({error:'operation not permited'});
         
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