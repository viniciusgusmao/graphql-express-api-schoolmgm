const models = require("../models");

module.exports = {  
  async classes(){
    const classes = await models.Class.findAll({
      attributes: ["id", "name", "abbreviation", "shift", "year"],
      include: [
        {
          association: "grade",
          attributes: [ "id", "name", "abbreviation"]
        },
        {
          association: "students",
          attributes: [ "id", "name", "email", "enrollment"]
        }
      ]
    });
    return classes;
  },
  async class(id){
    const classes = await models.Class.findByPk(id,{
      attributes: ["id", "name", "abbreviation", "shift", "year"],
      include: [
        {
          association: "grade",
          attributes: [ "id", "name", "abbreviation"]
        },
        {
          association: "students",
          attributes: [ "id", "name", "email", "enrollment"]
        }
      ]
    });
    return classes;
  }
 
}