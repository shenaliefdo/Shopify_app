const env = process.env.NODE_ENV || 'development';
const _ = require('lodash');

const config = {
    development: {
        app: {
            name: 'Shopify_App_Server'
        },
        port: process.env.PORT || 3000,
        db: {
            username: "root",
            password: null,
            database: "database_development",
            host: "127.0.0.1",
            dialect: "sqlite"
        },
        host_url: "http://localhost:3000",
        env
    },

    production: {
        app: {
            name: 'Shopify_App_Server'
        },
        port: process.env.PORT || 3000,
        db: {
            username: "root",
            password: null,
            database: "database_production",
            host: "127.0.0.1",
            dialect: "mysql"
        },
        host_url: process.env.HOST_URL,
        env
    },

};
function checkCriticalStartupObject(obj) {
    if (typeof _ === 'undefined') {
        throw new Error('lodash not defined inside critical parameter check');
    }

    _.forOwn(obj, (value, key) => {
        if (_.isNil(value)) {
            throw new Error(`Failure at checkCriticalStartupObject() => ${key}: ${obj[key]}`);
        }
        if (_.isObject(value)) {
            checkCriticalStartupObject(value);
        }
    });
}


module.exports = (function getFinal() {
    const currentConfig = config[env];
    console.log('Checking Startup Configs..');
    checkCriticalStartupObject(currentConfig);

    return config[env];
}());
