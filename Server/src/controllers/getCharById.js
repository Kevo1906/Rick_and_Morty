const URL = "https://rickandmortyapi.com/api/character/";
const axios = require("axios");


const getCharById = async (req, res) => {
  try {
  const { id } = req.params;
  let {data} = await axios(URL + id)
  const character = {
    id: data.id,
    name: data.name,
    gender: data.gender,
    species: data.species,
    origin: data.origin.name,
    image: data.image,
    status: data.status,
  }
  if(data.name){
    return res.json(character)
  } else {
    return res.status(404).send("Not found")
  }} catch(error) {
    res.status(500).send({message: error})
  }
  // axios(URL + id).then((response) => {
  //   const character = {
  //     id: response.data.id,
  //     name: response.data.name,
  //     gender: response.data.gender,
  //     species: response.data.species,
  //     origin: response.data.origin.name,
  //     image: response.data.image,
  //     status: response.data.status,
  //   };
  //   if(response.data.name){
  //       return res.json(character)
  //   } else {
  //       return res.status(404).send("Not found")
  //   }
    
  // }).catch(response => res.status(500).send({message:"error"}));
};

module.exports = {getCharById};