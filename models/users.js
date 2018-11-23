'use strict';
module.exports = (sequelize, DataTypes) => {
    var users = sequelize.define('users', {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: DataTypes.STRING
    }, {
        paranoid: false,
        timestamps: false
    });
    users.associate = function (models) {
        users.belongsToMany(models.groups, {as: 'group', through: 'userGroups', foreignKey: 'userId'})
    };
    return users;
};