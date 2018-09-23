const Sequalize = require('sequelize');
const sequalize = require('../../config/db');

const LineItem = sequalize.define('lineitems', {
    quantity: {
        type: Sequalize.INTEGER
    },
    total: {
        type: Sequalize.FLOAT
    }
});
module.exports = LineItem;
