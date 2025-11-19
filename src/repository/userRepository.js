const { User } = require("../models");
const bcrypt = require("bcrypt");

const userRepository = {
  findAll: async () => {
    return await User.findAll({
      attributes: { exclude: ["password"] },
    });
  },

  findById: async (id) => {
    return await User.findByPk(id, {
      attributes: { exclude: ["password"] },
    });
  },

  create: async (userData) => {
    if (userData.password) {
      userData.password = await bcrypt.hash(userData.password, 10);
    }
    return await User.create(userData);
  },

  update: async (id, updateData) => {
    const user = await User.findByPk(id);
    if (!user) return null;
    if (updateData.password) {
      updateData.password = await bcrypt.hash(updateData.password, 10);
    }
    return await user.update(updateData);
  },

  delete: async (id) => {
    const user = await User.findByPk(id);
    if (!user) return null;
    await user.destroy();
    return true;
  },
};

module.exports = userRepository;
