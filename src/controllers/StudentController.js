const models = require("../models");

module.exports = {  
  async index(req, res) {
    try {     
      const students = await models.Student.findAll({
        attributes: ["name","email"]
      });
           

      return res.json(students);
    } catch(e) {
      return res.status(403).json({error: String(e)})
    }
  },
 
}