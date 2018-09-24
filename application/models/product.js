
module.exports = (sequelize, DataTypes) => {
    const product = sequelize.define('product', {
        name: DataTypes.STRING,
        price: DataTypes.FLOAT
    }, {});
    product.associate = function (models) {
    // associations can be defined here
    };
    return product;
};
