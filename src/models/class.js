'use strict';
module.exports = (sequelize, DataTypes) => {
  const Class = sequelize.define('Class', {
    name: DataTypes.STRING,
    abbreviation: DataTypes.STRING,
    shift: DataTypes.STRING,
    year: DataTypes.INTEGER,
    grade_id: DataTypes.INTEGER
  }, {});
  Class.associate = function(models) {
    Class.hasMany(models.Student,{
      foreignKey: "class_id",
      as: "students"
    });
    Class.belongsTo(models.Grade, {
      foreignKey: "grade_id",
      as: "grade"
    });
  };
  return Class;
};