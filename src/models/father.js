'use strict';
module.exports = (sequelize, DataTypes) => {
  const Father = sequelize.define('Father', {
    name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  Father.associate = function(models) {
    Father.belongsToMany(models.Student, {
      foreignKey: "father_id",
      through: models.StudentFather,
      onDelete: 'cascade',
      as: {
        singular: "student",
        plural: "students"
      }
    });
  };
  return Father;
};