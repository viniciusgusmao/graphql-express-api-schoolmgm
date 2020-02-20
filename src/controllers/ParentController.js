const models = require("../models");

module.exports = {  
  async parents(){
    const parents = await models.Parent.findAll({
      attributes: [ 'id', 'name', "email" ],
      include: [
        {
          association: "students",
          attributes: [ "id", "name", "email", "enrollment" ]          
        },
      ]
    });
    return parents;
  },
  async parent(id){
    const parents = await models.Parent.findByPk(id,{
      attributes: [ 'id', 'name', "email" ],
      include: [
        {
          association: "students",
          attributes: [ "id", "name", "email", "enrollment" ]          
        },
      ]
    });
    return parents;
  }
}