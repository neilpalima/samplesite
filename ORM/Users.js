var Sequelize = require('sequelize');
var sequelize = require('./helpers').connect();

const Users = sequelize.define('users', {
    username: { type: Sequelize.STRING, primaryKey: true },
    password: Sequelize.STRING,
    email: Sequelize.STRING,
    address: Sequelize.STRING,
    type: Sequelize.ENUM('ADMIN', 'USER')
});

module.exports = Users;