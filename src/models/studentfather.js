'use strict';
module.exports = (sequelize, DataTypes) => {
  const StudentFather = sequelize.define('StudentFather', {
    student_id: DataTypes.INTEGER,
    father_id: DataTypes.INTEGER
  }, {});
  StudentFather.associate = function(models) {
    // associations can be defined here
  };
  return StudentFather;
};