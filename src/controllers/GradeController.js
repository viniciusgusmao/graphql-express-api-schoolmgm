const models = require("../models");

module.exports = {  
  async grades(){
    const grades = await models.Grade.findAll({
      attributes: ["id", "name", "abbreviation"],
      include: [{
        association: "course",
        attributes: [ "id", "name", "abbreviation"]
      }]
    });
    return grades;
  },
  async grade(id){
    const grades = await models.Grade.findByPk(id,{
      attributes: ["id", "name", "abbreviation"],
      include: [{
        association: "course",
        attributes: [ "id", "name", "abbreviation"]
      }]
    });
    return grades;
  },
  async createGrade(name, abbreviation, course_id){
    const grade = await models.Grade.create({ name, abbreviation, course_id })
    return grade;
  }
}