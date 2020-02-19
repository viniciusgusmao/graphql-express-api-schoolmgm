const models = require("../models");

module.exports = {  
  async index(req, res) {
    try {     
      const students = await models.Student.findAll({
        attributes: [ 'id', 'name', "email", "enrollment" ],
        include: [
          {
            association: "parents",
            attributes: [ "id", "name", "email" ],
            through: {
              attributes: ["type"]
            }
          },
          {
            association: "class",
            attributes: [ "id", "name", "abbreviation", "shift", "year" ],
            include: [{
              association: "grade",
              attributes: [ "id", "name", "abbreviation" ],
              include:[{
                association: "course",
                attributes: [ "id", "name", "abbreviation" ],
              }]
            }]
          }
        ]
      });
      return res.json(students);
    } catch(e) {
      return res.status(403).json({error: String(e)})
    }
  },
 
}