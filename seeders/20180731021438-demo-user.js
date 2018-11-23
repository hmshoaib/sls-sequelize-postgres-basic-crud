'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('users', [{
            firstName: 'John',
            lastName: 'Doe',
            email: 'demo@demo.com'
        },{
            firstName: 'Smith',
            lastName: 'Joe',
            email: 'demo1@demo1.com'
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('users', null, {});
    }
};