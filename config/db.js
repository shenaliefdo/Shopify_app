// const Sequelize = require('sequelize');
// const config = require('./config').db;
// function createNewDbConnection({
//     database,
//     username,
//     password
// }) {
//     return new Sequelize(database, username, password, {
//         host: 'localhost',
//         dialect: 'sqlite',
//         operatorsAliases: false,

//         pool: {
//             max: 5,
//             min: 0,
//             acquire: 30000,
//             idle: 10000
//         },

//         // SQLite only
//         storage: 'database.sqlite'
//     });
// }

// const sequelize = createNewDbConnection(config);
// sequelize
//     .authenticate()
//     .then(() => {
//         console.log('Connection has been established successfully.');
//     })
//     .catch((err) => {
//         console.error('Unable to connect to the database:', err);
//     });

// module.exports = sequelize;
