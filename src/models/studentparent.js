'use strict';
module.exports = (sequelize, DataTypes) => {
  const StudentParent = sequelize.define('StudentParent', {
    student_id: DataTypes.INTEGER,
    father_id: DataTypes.INTEGER
  }, {});
  StudentParent.associate = function(models) {
    // associations can be defined here
  };
  return StudentParent;
};