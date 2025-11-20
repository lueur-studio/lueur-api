const userRepository = require("../repository/userRepository");

const userService = {
  getAllUsers: async () => {
    const users = await userRepository.findAll();
    return users;
  },

  getUserById: async (id) => {
    const user = await userRepository.findById(id);
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  },

  createUser: async (userData) => {
    const user = await userRepository.create(userData);
    return user.toJSON();
  },

  updateUser: async (id, updateData) => {
    const user = await userRepository.update(id, updateData);
    if (!user) {
      throw new Error("User not found");
    }
    return user.toJSON();
  },

  deleteUser: async (id) => {
    const result = await userRepository.delete(id);
    if (!result) {
      throw new Error("User not found");
    }
    return true;
  },
};

module.exports = userService;
