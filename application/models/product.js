const Sequalize = require('sequelize');
const sequalize = require('../../config/db');
const lineItem = require('./lineitem');

const Product = sequalize.define('product', {
    product: {
        type: Sequalize.STRING
    },
    value: {
        type: Sequalize.FLOAT
    }

});
Product.hasMany(lineItem);
module.exports = Product;
