const generateToken = require("../config/jwt");
const userRepository = require("../repositories/userRepository");

class UserService {
  async registerUser(data) {
    try {
      const user = await userRepository.create(data);
      const token=generateToken(user);
      return {user,token}
      
    } catch (error) {
      throw new Error("Registration failed: " + error.message);
    }
  }

  async loginUser({email, password}) {
    try {
      const user = await userRepository.findByEmail(email);
      if (!user) throw new Error("Invalid email or password");

      const isMatch = await user.comparePassword(password);
      if (!isMatch) throw new Error("Invalid email or password");

      const token=generateToken(user);
      return {user,token};
    } catch (error) {
      throw new Error("Login failed: " + error.message);
    }
  }

  async getUserById(id) {
    return await userRepository.get(id);
  }

  async getAllUsers(){
    return await userRepository.getAllUsers()
  }
}

module.exports = new UserService();
