const Sequalize = require('sequelize');
const sequalize = require('../../config/db');

const LineItem = sequalize.define('lineitems', {
    quantity: {
        type: Sequalize.NUMBER
    },
    total: {
        type: Sequalize.FLOAT
    }
});
module.exports = LineItem;
