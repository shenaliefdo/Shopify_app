
module.exports = (sequelize, DataTypes) => {
    const lineItem = sequelize.define('lineItem', {
        quantity: DataTypes.INTEGER,
        total: DataTypes.FLOAT
    }, {});
    lineItem.associate = function (models) {
    // associations can be defined here
    };
    return lineItem;
};
