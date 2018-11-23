'use strict';
module.exports = (sequelize, DataTypes) => {
  var groups = sequelize.define('groups', {
    name: DataTypes.STRING,
    limit: DataTypes.INTEGER
  }, {
      paranoid: false,
      timestamps: false
  });
  groups.associate = function(models) {
    groups.belongsToMany(models.users, { as: 'users', through: 'userGroups', foreignKey: 'groupId' })
  };
  return groups;
};