'use strict';
module.exports = (sequelize, DataTypes) => {
  const StudentParent = sequelize.define('StudentParent', {
    type: DataTypes.STRING
  }, {});
  return StudentParent;
};