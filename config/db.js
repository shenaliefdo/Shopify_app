const Sequelize = require('sequelize');
module.exports = (dbconfig) => {
    const { database, username, password } = dbconfig;
    return new Sequelize(database, username, password, {
        host: 'localhost',
        dialect: 'sqlite',
        operatorsAliases: false,

        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },

        // SQLite only
        storage: 'database.sqlite'
    });
};
