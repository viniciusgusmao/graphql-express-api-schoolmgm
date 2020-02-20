const models = require("../models");

module.exports = {  
  async courses(){
      const courses = await models.Course.findAll();
      return courses;
  },
  async course(id){
    const courses = await models.Course.findByPk(id);
    return courses;
  },
  async createCourse(name, abbreviation){
    const course = await models.Course.create({ name, abbreviation })
    return course;
  }
}