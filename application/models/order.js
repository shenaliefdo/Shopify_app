const Sequalize = require('sequelize');
const sequalize = require('../../config/db');

const Order = sequalize.define('order', {
    total: {
        type: Sequalize.NUMBER
    },
});
module.exports = Order;
