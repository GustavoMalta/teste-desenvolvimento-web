const Pokemon = require('../models/pokemon');

module.exports = {
    async search(req, res){
        const {page = 1 } = req.params;
        const limit = 2

        const {name} = req.query;
        console.log(name);
        
        var result = await Pokemon.find({})
                                    .skip((Number(page)-1)*limit)
                                    .limit(limit)
                                    .sort({'Name': 1});

        console.log(' Result: ' + result)
        return res.json(result)
    }

} 