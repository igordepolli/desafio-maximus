const { Model, DataTypes } = require("sequelize");
const bcrypt = require('bcryptjs');

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        userName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.VIRTUAL,
        passwordHash: DataTypes.STRING,
      }, {
        sequelize,
      });

    this.addHook("beforeSave", async (client) => {
      if (client.password) {
        client.passwordHash = await bcrypt.hash(client.password, 8);
      }
    });

    return this;
  }
}

module.exports = User;
