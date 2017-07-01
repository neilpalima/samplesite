var Sequelize = require('sequelize');
var config = require('../config');

module.exports = {
    connect: () => {
        const db = config.db;
        const sequelize = new Sequelize(db.name, db.username, db.password, {
            host: 'localhost',
            dialect: 'mysql',
            pool: {
                max: 5,
                min: 0,
                idle: 10000
            }
        });

        sequelize
            .authenticate()
            .then(() => {
                console.log('Connection has been established successfully.');
            })
            .catch(err => {
                console.error('Unable to connect to the database:', err);
            });
    }
}


