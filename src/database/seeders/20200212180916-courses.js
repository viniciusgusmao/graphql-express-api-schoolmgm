'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {   
      
      const courses = [
        {
          name: "ENSINO MÉDIO",
          abbreviation: "EM",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "ENSINO FUNDAMENTAL I",
          abbreviation: "EFI",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "ENSINO FUNDAMENTAL II",
          abbreviation: "EFII",
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ];

      return queryInterface.bulkInsert('Courses', courses, {});    
  },

  down: (queryInterface, Sequelize) => {   
      return queryInterface.bulkDelete('Courses', null, {});
  }
};
