const user = require("../models/user");
const CrudRepository = require("./crudRepository");

class AdminRepository extends CrudRepository{
    constructor(){
        super(user)
    }

    async getAllDrivers(){
         return await user.find({role:'driver'});
    }
}

module.exports=new AdminRepository();