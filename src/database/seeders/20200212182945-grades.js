'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      const grades = [
        {
          name: "1° série",
          abbreviation: "2° série",
          course_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "2° série",
          abbreviation: "2° série",
          course_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "3° série",
          abbreviation: "3° série",
          course_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "1° ano",
          abbreviation: "1° ano",
          course_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "2° ano",
          abbreviation: "2° ano",
          course_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "3° ano",
          abbreviation: "3° ano",
          course_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "4° ano",
          abbreviation: "4° ano",
          course_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "5° ano",
          abbreviation: "5° ano",
          course_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "6° ano",
          abbreviation: "6° ano",
          course_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "7° ano",
          abbreviation: "7° ano",
          course_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "8° ano",
          abbreviation: "8° ano",
          course_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "9° ano",
          abbreviation: "9° ano",
          course_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]
      return queryInterface.bulkInsert('Grades', grades, {});    
  },

  down: (queryInterface, Sequelize) => { 

      return queryInterface.bulkDelete('Grades', null, {});
    
  }
};
