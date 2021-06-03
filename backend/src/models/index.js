const User = require('./User');
const { Sequelize } = require('sequelize');

console.log(process.env.DATABASE_URL);
const sequelize = new Sequelize(process.env.DATABASE_URL);
User.init(sequelize);

//sequelize.sync({force: false, alter: true});

module.exports = sequelize;