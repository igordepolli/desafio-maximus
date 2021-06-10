const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        username: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      }, {
        sequelize,
      },
    );

    this.addHook('beforeSave', async (client) => {
      if (client.password) {
        // eslint-disable-next-line no-param-reassign
        client.password = await bcrypt.hash(client.password, 8);
      }
    });

    return this;
  }
}

module.exports = User;
