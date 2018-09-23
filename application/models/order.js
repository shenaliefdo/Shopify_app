const Sequalize = require('sequelize');
const sequalize = require('../../config/db');
const lineItems = require('./lineitem');


const Order = sequalize.define('order', {
    total: {
        type: Sequalize.FLOAT
    },
});
Order.hasMany(lineItems);
module.exports = Order;
