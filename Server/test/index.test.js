const app = require("../src/app")
const session = require("supertest")
const agent = session(app)

describe("GET /rickandmorty/character/:id", () =>{
    it("Responde con status: 200", async () => {
        await agent.get("/rickandmorty/character/1").expect(200)
    })
    
    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image', async () => {
        const character = await agent.get("/rickandmorty/character/1").send()
        
        expect(Object.keys(character.body)).toEqual(["id", "name", "gender", "species", "origin", "image", "status"]);
    })

    it("Si hay un error responde con status: 500", async()=>{
        await agent.get("/rickandmorty/character/10000").expect(500)
    })
})

describe("GET /rickandmorty/login", ()=>{
    const users = require("../src/utils/users") 
    it("Si se envian las credenciales correctas devuelve un objeto con access = true", async()=>{
        const response = await agent.get(`/rickandmorty/login/?email=${users[0].email}&password=${users[0].password}`).send()
        console.log(users[0])
        expect(response.body.access).toBe(true)
    })

    it("Si se envian las credenciales incorrectas devuelve un objeto con access = false", async()=>{
        const response = await agent.get(`/rickandmorty/login/?email=otrousuario&password=otracontrasena`).send()
        console.log(users[0])
        expect(response.body.access).toBe(false)
    })
})

describe("POST /rickandmorty/fav", () => {
    
    it("Lo que se envie por body debe ser devuelto por arreglo", async()=>{
        const character = {
            otro: "algo",
            otro1: "algo2"
        }
        const response = await agent.post("/rickandmorty/fav").send(character)
       
        expect(response.body[0]).toEqual(character)
    })

    it("Si se envia un nuevo arreglo este debe ser devuelto en un arreglo que incluye el elemento anteriormente enviado", async()=>{
        const character2 = {
            otro2: "algo3",
            otro3: "algo4"
        }
        const character = {
            otro: "algo",
            otro1: "algo2"
        }
        const response = await agent.post("/rickandmorty/fav").send(character2)
        
        expect(response.body[0]).toEqual(character)
        expect(response.body[1]).toEqual(character2)
    })
})