const axios = require('axios');

module.exports = {
    async index(request, response){

        const {name,} = request.query;
        const techsArray = parseTechs(techs.toLowerCase())
        
        var result = await Devfind({Name:"Bulb"})
                                    .skip((Number(page)-1)*limit)
                                    .limit(limit)
                                    .sort({'Name': 1});

        console.log(' Devs com ' + result)
        return response.json(result)
    }

} 