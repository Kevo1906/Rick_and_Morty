const http = require("http")
const fs = require("fs")
const {getCharById} = require("./controllers/getCharById")

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    if(req.url.startsWith("/rickandmorty/character/")) {
            const id = req.url.split("/").pop()
            getCharById(res,id)
        }
    }
).listen(3110, "127.0.0.1")