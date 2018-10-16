
module.exports = (sequelize, DataTypes) => {
    const shopId = sequelize.define('shopId', {});
    const product = sequelize.define('product', {
        name: DataTypes.STRING,
        price: DataTypes.FLOAT
    }, {});
    product.associate = (models) => {
        product.belongsTo(models.shop, { through: shopId });
    };

    return product;
};
