'use strict';
module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
    name: {
      type: DataTypes.STRING,
      unique: true
    },
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