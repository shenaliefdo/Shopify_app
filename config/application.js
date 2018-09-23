

const path = require('path');
const dbStore = require("./db.js");
const appConfig = require('./config');
const application = require('../application/express.js');
function start() {
    const { db, port, env } =appConfig;
    dbStore.connectDb(db)
        .then(() => {
            application.listen(port, (err) => {
                if (err) {
                    throw new Error(err);
                }
                console.log(`Running App on port ${port} in ${env} mode`);
            });
        }).catch((err) => {
            console.trace(err);
            process.exit(1);
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


module.exports ={ start };
