'use strict';
module.exports = (sequelize, DataTypes) => {
    var userGroups = sequelize.define('userGroups', {
        userId: DataTypes.INTEGER,
        groupId: DataTypes.INTEGER
    },{
        paranoid: false,
        timestamps: false
    });
    // userGroups.associate = function (models) {
    //     // associations can be defined here
    // };
    return userGroups;
};