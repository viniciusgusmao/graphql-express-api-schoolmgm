'use strict';
module.exports = (sequelize, DataTypes) => {
  const Parent = sequelize.define('Parent', {
    name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  Parent.associate = function(models) {
    Parent.belongsToMany(models.Student, {
      foreignKey: "parent_id",
      through: 'StudentParents',
      onDelete: 'cascade',
      as: {
        singular: "Student",
        plural: "students"
      }
    });
  };
  return Parent;
};