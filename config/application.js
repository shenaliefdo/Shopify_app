const path = require('path');
const createNewConnection = require("./db.js");
const appConfig = require('./config');
const application = require('../application/express.js');
function start() {
    const {
        db,
        port,
        env
    } = appConfig;
    createNewConnection(db)
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
            application.listen(port, (err) => {
                if (err) {
                    throw new Error(err);
                }
                console.log(`Running App on port ${port} in ${env} mode`);
            });
        })
        .catch((err) => {
            console.error('Unable to connect to the database:', err);
        });
}


process.on('exit', (code) => {
    // should notify sysAdmin
    console.trace(new Error(`Fatal Error, About to Exit Node Process with code ${code}`));
});

process.on('unhandledRejection', (reason, p) => {
    console.trace("Possibly Unhandled Rejection at: Promise ", p, " reason: ", reason);
});

process.on('rejectionHandled', (reason, p) => {
    console.trace("rejectionHandled Rejection at: Promise ", p, " reason: ", reason);
});


module.exports = {
    start
};
