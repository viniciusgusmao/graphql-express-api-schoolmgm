'use strict';
module.exports = (sequelize, DataTypes) => {
  const Grade = sequelize.define('Grade', {
    name: {
      type: DataTypes.STRING,
      unique: true
    },
    abbreviation: DataTypes.STRING,
    course_id: DataTypes.INTEGER
  }, {});
  Grade.associate = function(models) {
    Grade.belongsTo(models.Course, {
      foreignKey: "course_id",
      as: "course"
    });
    Grade.hasMany(models.Class,{
      foreignKey: "class_id",
      as: "classes"
    });
  };
  return Grade;
};