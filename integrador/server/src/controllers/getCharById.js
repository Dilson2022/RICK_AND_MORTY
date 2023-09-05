const axios = require("axios");

function getCharById(res, id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => {
        console.log(response.data);
        const {name, image, species, gender, status, id, origin} = response.data;
        res.writeHead(200,{"Content-Type" : "application/json"} );
        res.end(JSON.stringify({ id, name, image, gender,species, status, origin}) )
    })
    .catch((error) => {
        res.writeHead(500,{"Content-Type" : "text/plain"} ) 
        res.end(error.message)
    })
}

module.exports = {getCharById};