

module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('products', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        shopId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'shops',
                key: 'id'
            },
            allowNull: false
        },
        name: {
            type: Sequelize.STRING,
            index: true
        },
        price: {
            type: Sequelize.FLOAT
        },
        createdAt: {
            allowNull: false,
            type: Sequelize.DATE
        },
        updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
        }
    }),
    down: (queryInterface, Sequelize) => queryInterface.dropTable('products')
};
