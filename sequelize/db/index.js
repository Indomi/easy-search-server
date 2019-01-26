const config = require('../../config/db.config')
const Sequelize = require('sequelize')

const dbConfig = {
    database: config.database,
    username: config.username,
    password: config.password,
    host: config.host,
    dialect: config.dialect
}

const sequelize = new Sequelize(dbConfig.database,
    dbConfig.username,
    dbConfig.password, {
        host: dbConfig.host,
        dialect: dbConfig.dialect,
        operatorsAliases: false,

        timezone: '+08:00',
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    })

module.exports = sequelize