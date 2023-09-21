const axios = require("axios")
const getCharById = (res, id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => {
        let character = {
            id: response.data.id,
            name: response.data.name,
            gender: response.data.gender,
            species: response.data.species,
            origin: response.data.origin.name,
            image: response.data.image,
            status: response.data.status
        }
        res.writeHead(200, { "Content-Type": "application/json" })
            
        res.end(JSON.stringify(character))
        return})
    .catch(error => {
        res.writeHead(500, { "Content-Type": "text/plain" })
            
        res.end(error.message)
        return
    })
}


module.exports = {
    getCharById:getCharById
}