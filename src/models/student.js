'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    enrollment: DataTypes.INTEGER,
    class_id: DataTypes.INTEGER
  }, {});
  Student.associate = function(models) {
    Student.belongsTo(models.Class, {
      foreignKey: "class_id",
      as: "class"
    });
    Student.belongsToMany(models.Father, {
      foreignKey: "student_id",
      through: models.StudentFather,
      onDelete: 'cascade',
      as: {
        singular: "father",
        plural: "fathers"
      }
    });
  };
  return Student;
};