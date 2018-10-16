
module.exports = (sequelize, DataTypes) => {
    const lineItem = sequelize.define('lineItem', {
        quantity: DataTypes.INTEGER,
        total: DataTypes.FLOAT
    }, {});
    lineItem.associate = (models) => {
        lineItem.belongsTo(models.product);
        lineItem.belongsTo(models.order);
    };
    return lineItem;
};
