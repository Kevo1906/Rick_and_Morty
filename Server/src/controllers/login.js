const users = require("../utils/users.js")

const login = (req, res ) =>{
    const{email,password} = req.query
    
    const valid_user = users.filter(element => element.email === email && element.password === password)
    
    if(valid_user[0].email){
        return res.status(200).json({
            access: true
        })
    } else {
        return res.status(200).json({
            access: false
        })
    }
}

module.exports = {login};