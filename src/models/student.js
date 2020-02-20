'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    enrollment: {
      type: DataTypes.INTEGER,
      unique: true
    },
    class_id: DataTypes.INTEGER
  }, {});
  Student.associate = function(models) {
    Student.belongsTo(models.Class, {
      foreignKey: "class_id",
      as: "class"
    });
    Student.belongsToMany(models.Parent, {
      foreignKey: "student_id",
      through: 'StudentParents',
      onDelete: 'cascade',
      as: {
        singular: "Parent",
        plural: "parents"
      }
    });
  };
  return Student;
};