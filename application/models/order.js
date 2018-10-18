
module.exports = (sequelize, DataTypes) => {
    const order = sequelize.define('order', {
        total: DataTypes.FLOAT,
        shopId: DataTypes.INTEGER
    }, {});
    order.associate = (models) => {
        order.belongsTo(models.shop);
    };
    return order;
};
