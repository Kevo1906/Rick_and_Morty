let myFavorites = []

const postFav = (req, res) => {
    myFavorites.push(req.body)
    console.log(req.body)
    return res.json(myFavorites)
}

const deleteFav = (req, res) =>{
    const id = req.params.id
    myFavorites = myFavorites.filter(element => element.id !== Number(id))
    return res.json(myFavorites)
}
module.exports = {postFav, deleteFav};