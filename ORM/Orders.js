var Sequelize = require('sequelize');
var sequelize = require('./helpers').connect();

var Users = require('./Users');

const Orders = sequelize.define('orders', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    date : { type: Sequelize.INTEGER, allowNull: false },
    customer : { type: Sequelize.INTEGER, allowNull: false }
});

Orders.hasMany(Users, {as: 'users', foreignKey : 'id'});

module.exports = Orders;