
module.exports = (sequelize, DataTypes) => {
    const Shop = sequelize.define('Shop', {
        name: {
            type: DataTypes.STRING,
            isRequired: true
        }
    }, {});
    return Shop;
};
