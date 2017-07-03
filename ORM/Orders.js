var Sequelize = require('sequelize');
var sequelize = require('./helpers').connect();

var Users = require('./Users');

const Orders = sequelize.define('orders', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    date : { type: Sequelize.INTEGER, allowNull: false }
});

Orders.belongsTo(Users);

module.exports = Orders;