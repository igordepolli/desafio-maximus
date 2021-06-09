const { Sequelize } = require('sequelize');
const User = require('./User');

const sequelize = new Sequelize(process.env.DATABASE_URL);
User.init(sequelize);

module.exports = sequelize;
