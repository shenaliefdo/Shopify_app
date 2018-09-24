
module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
        total: DataTypes.FLOAT
    }, {});
    Order.associate = function (models) {
    // associations can be defined here
    };
    return Order;
};
