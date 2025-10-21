const jwt=require("jsonwebtoken")
const { JWT_SECRET } = require("./server-config")
const generateToken=(user)=>{
    return jwt.sign({id:user._id,role:user.role},JWT_SECRET,{expiresIn:'1d'});
}

module.exports=generateToken;