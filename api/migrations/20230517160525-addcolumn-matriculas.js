'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn('Matriculas', 'deletedAt', {
            allowNull: true,
            type: Sequelize.DATE
        })
    },
    down: (queryInterface) => {
        return queryInterface.removeColumn('Matriculas', 'deletedAt');
    }
}