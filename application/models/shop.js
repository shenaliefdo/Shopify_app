const Sequelize = require('sequelize');
const sequelize = require('../../config/db');
const Order = require('./order');


const Shop = sequelize.define('shop', {
    shopName: {
        type: Sequelize.STRING
    },
});
Shop.hasMany(Order);
