const { CrudRepository } = require(".");
const User = require("../models/user");


class UserRepository extends CrudRepository{
    constructor(){
        super(User)
    }
    async findByEmail(email) {
        return await this.model.findOne({ email });
    }
}

module.exports=new UserRepository();