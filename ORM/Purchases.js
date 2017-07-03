var Sequelize = require('sequelize');
var sequelize = require('./helpers').connect();

var Orders = require('./Orders');
var Products = require('./Products');

const Purchases = sequelize.define('purchases', {
    orderId: { type: Sequelize.INTEGER, primaryKey: true },
    productId : { type: Sequelize.INTEGER, primaryKey: true },
    quantity : { type: Sequelize.INTEGER, allowNull: false }
});

Purchases.hasMany(Orders, {as: 'orders', foreignKey : 'id'});
Purchases.hasMany(Products, {as: 'products', foreignKey : 'id'});

Purchases.getAllByOrderId = (orderId, raw = false) => {
    return Purchases.findAll({
        include: [
            {
              model: Products,
              as: 'products'
            }
        ],
        where: {
            orderId: orderId,
        },
        raw: raw
    });
}

module.exports = Purchases;