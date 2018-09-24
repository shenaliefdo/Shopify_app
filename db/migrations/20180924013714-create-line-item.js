

module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('lineItems', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        quantity: {
            type: Sequelize.INTEGER
        },

        total: {
            type: Sequelize.FLOAT
        },
        productId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'products',
                key: 'id'
            },
            allowNull: false
        },
        orderId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'orders',
                key: 'id'
            },
            allowNull: false
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
    down: (queryInterface, Sequelize) => queryInterface.dropTable('lineItems')
};
