const Sequelize = require('sequelize');

require('dotenv').config();

const sequelize = process.env.NEON_URL
    ? new Sequelize(process.env.NEON_URL)
    : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
        // host: 'localhost',
        host:   'localhost',
        dialect: 'postgres',
        port: 5432
    });

module.exports = sequelize;
