const Sequelize = require('sequelize');
const sequelize = require('../../config/db');
const Order = require('./order');
const Product = require('./product');


const Shop = sequelize.define('shop', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});
Shop.hasMany(Order);
Shop.hasMany(Product);

module.exports = Shop;
