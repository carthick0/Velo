const adminRepository = require("../repositories/adminRepository");

class AdminService{
    async getAllDrivers(){
        try {
            const response=await adminRepository.getAllDrivers();
            return response;
        } catch (error) {
            console.log(error)
        }
    }
}
module.exports=new AdminService();