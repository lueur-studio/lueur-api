const { User, UserAuth } = require("../models");
const bcrypt = require("bcrypt");

const userRepository = {
  findAll: async () => {
    return await User.findAll({
      include: [
        {
          model: UserAuth,
          as: "auth",
          attributes: [],
        },
      ],
    });
  },

  findById: async (id) => {
    return await User.findByPk(id, {
      include: [
        {
          model: UserAuth,
          as: "auth",
          attributes: [],
        },
      ],
    });
  },

  create: async (userData) => {
    const { password, ...userInfo } = userData;

    const result = await User.sequelize.transaction(async (t) => {
      const user = await User.create(userInfo, { transaction: t });

      if (password) {
        const passwordHash = await bcrypt.hash(password, 10);
        await UserAuth.create(
          {
            user_id: user.id,
            password_hash: passwordHash,
          },
          { transaction: t }
        );
      }

      return user;
    });

    return result;
  },

  update: async (id, updateData) => {
    const user = await User.findByPk(id);
    if (!user) return null;

    const { password, ...userInfo } = updateData;

    await User.sequelize.transaction(async (t) => {
      await user.update(userInfo, { transaction: t });

      if (password) {
        const passwordHash = await bcrypt.hash(password, 10);
        const auth = await UserAuth.findOne({ where: { user_id: id } });

        if (auth) {
          await auth.update(
            { password_hash: passwordHash },
            { transaction: t }
          );
        } else {
          await UserAuth.create(
            {
              user_id: id,
              password_hash: passwordHash,
            },
            { transaction: t }
          );
        }
      }
    });

    return user;
  },

  delete: async (id) => {
    const user = await User.findByPk(id);
    if (!user) return null;
    await user.destroy();
    return true;
  },
};

module.exports = userRepository;
