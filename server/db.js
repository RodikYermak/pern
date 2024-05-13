const { Sequelize } = require('sequelize');

module.exports = new Sequelize(
    process.env.DB_NAME, // name of the database
    process.env.DB_USER, // username
    process.env.DB_PASSWORD, // password
    {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
    }
);
