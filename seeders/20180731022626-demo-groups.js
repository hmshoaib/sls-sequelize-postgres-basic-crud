'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('groups', [{
            name: 'Platinum',
            limit: 10
        },{
            name: 'Gold',
            limit: 8
        },{
            name: 'Silver',
            limit: 5
        },{
            name: 'Bronze',
            limit: 2
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('groups', null, {});
    }
};