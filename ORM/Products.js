var Sequelize = require('sequelize');
var sequelize = require('./helpers').connect();

const Products = sequelize.define('Products', {
    id: { type: Sequelize.STRING, primaryKey: true, autoIncrement: true },
    name: Sequelize.STRING,
    price: Sequelize.DOUBLE,
    description: Sequelize.TEXT,
    sku: Sequelize.STRING
});

module.exports = Products;