

module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('orders', {
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
        total: {
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
    down: (queryInterface, Sequelize) => queryInterface.dropTable('orders')
};
