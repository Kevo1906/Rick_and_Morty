const URL = "https://rickandmortyapi.com/api/character/";
const axios = require("axios");


const getCharById = (req, res) => {
  const { id } = req.params;
  axios(URL + id).then((response) => {
    const character = {
      id: response.data.id,
      name: response.data.name,
      gender: response.data.gender,
      species: response.data.species,
      origin: response.data.origin.name,
      image: response.data.image,
      status: response.data.status,
    };
    if(response.data.name){
        return res.json(character)
    } else {
        return res.status(404).send("Not found")
    }
    
  }).catch(response => res.status(500).send({message:"error"}));
};

module.exports = {getCharById};