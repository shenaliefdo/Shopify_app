
module.exports = (sequelize, DataTypes) => {
    // const shopId = sequelize.define('shopId', {});
    const product = sequelize.define('product', {
        name: DataTypes.STRING,
        price: DataTypes.FLOAT,
        shopId: DataTypes.INTEGER
    }, {});
    product.associate = (models) => {
        product.belongsTo(models.shop);
    };

    return product;
};
