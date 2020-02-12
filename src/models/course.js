'use strict';
module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
    name: DataTypes.STRING,
    abbreviation: DataTypes.STRING
  }, {});
  Course.associate = function(models) {
    Course.hasMany(models.Grade,{
      foreignKey: "course_id",
      as: "grades"
    });
  };
  return Course;
};