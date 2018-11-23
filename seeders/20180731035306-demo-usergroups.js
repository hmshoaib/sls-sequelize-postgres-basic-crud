'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('userGroups', [{
            userId: 1,
            groupId: 1
        },{
            userId: 2,
            groupId: 1
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('userGroups', null, {});
    }
};