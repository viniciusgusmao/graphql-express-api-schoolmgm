'use strict';
module.exports = (sequelize, DataTypes) => {
  const StudentParent = sequelize.define('StudentParent', {
    student_id: DataTypes.INTEGER,
    parent_id: DataTypes.INTEGER,
    type: DataTypes.STRING
  }, {});
  StudentParent.associate = function(models) {
    // associations can be defined here
  };
  return StudentParent;
};