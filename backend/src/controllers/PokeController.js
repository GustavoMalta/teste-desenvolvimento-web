const Pokemon = require('../models/pokemon');
const {types, weather} = require('../models/consts');

module.exports = {
    async index(req, res){
        const {page = 1 } = req.params;
        let {Name} = req.query;
        const limit = 10
        const Pages = [1]

        console.log("page: " + page);
        
        const Pokemons = await Pokemon.find({$or:[{"Name":{ $regex: Name, $options: Name }},{"Pokedex_Number": Name}]})
                                    .skip((Number(page)-1)*limit)   
                                    .limit(limit)
                                    .sort({'Name': 1});
        const Total = await Pokemon.find({$or:[{"Name":{ $regex: Name, $options: Name }},{"Pokedex_Number": Name}]}).count()
        
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
            
            console.log(data);
            //data.Row = null //(response)?response.length+1:0; estou deixando o Row pra ser preenchido so na hora, no front

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
    }catch(err){
        console.log(err)
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
        console.log("Update: " + data.Name)
        let poke = await Pokemon.findOne({_id});

        if (poke){  
            console.log(data.Type_2 + ": "+ types.indexOf(data.Type_2)); //if para validar os types -1
            
            console.log(poke._id)
            console.log(data.Type_1) 
            console.log(data.Type_2)

            data.Name=data.Name.toLowerCase();
            data.Img_name = data.Pokedex_Number;
            
            while(data.Img_name.length<3){
                data.Img_name = '0'+data.Img_name
            }

            if( types.indexOf(data.Type_1) > -1 && 
                (types.indexOf(data.Type_2) > -1 || !data.Type_2 ) && 
                weather.indexOf(data.Weather_1) > -1&& 
                (weather.indexOf(data.Weather_2) > -1 || !data.Weather_2 )){
            
                poke = await Pokemon.updateOne(data)
                console.log ("Pokemon Atualizado");
            }else{
                console.log ("Falha na Atualização Tipo/Clima");
                return res.status(304).json(poke)
            }

        }else{
            console.log ("Falha na Atualização");
            return res.status(304).json(poke)
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