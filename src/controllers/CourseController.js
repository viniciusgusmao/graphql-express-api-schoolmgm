const models = require("../models");

module.exports = {  
  async courses(){
      const courses = await models.Course.findAll();
      return courses;
  },
  async course(id){
    const courses = await models.Course.findByPk(id);
    return courses;
  }
}