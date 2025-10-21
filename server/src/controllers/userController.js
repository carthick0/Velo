const userService = require("../services/userService");

class UserController{
    async register(req,res){
        try {
            const {user,token}=await userService.registerUser(req.body);
            res.status(201).json({message:"User Register Successfully",user,token});
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async login(req, res) {
        try {
            const { user, token } = await userService.loginUser(req.body);
            return res.status(200).json({message:"User LoggedIn Successfully", user, token });
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
}
module.exports=new UserController();