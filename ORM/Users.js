var Sequelize = require('sequelize');
var sequelize = require('./helpers').connect();

const Users = sequelize.define('users', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    username: { type: Sequelize.STRING, unique: true },
    password: Sequelize.STRING,
    email: { type: Sequelize.STRING, unique: true },
    address: Sequelize.STRING,
    type: Sequelize.ENUM('ADMIN', 'USER')
});

module.exports = Users;