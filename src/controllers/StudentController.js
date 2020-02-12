const models = require("../models");

module.exports = {  
  async index(req, res) {
    try {
      // await models.Course.create({
      //   name: "Ensino Fundamental I", 
      //   abbreviation: "EFI"
      // })
      // await models.Grade.create({
      //   name: "1° ano", 
      //   abbreviation: "1° ano",
      //   course_id: 1
      // })
      // await models.Class.create({
      //   name: "1° ano", 
      //   abbreviation: "1° ano",
      //   shift: "Matutino",
      //   year: 2020,
      //   grade_id: 1
      // })
      // await models.Student.create({
      //   name: "Vinicius Gusmao", 
      //   email: "vinicius-og@hotmail.com",
      //   enrollment: 55467,
      //   class_id: 1
      // })
      const students = await models.Student.findAll({
        'attributes': ['name', 'email', 'enrollment'],
        include: [{
          model: models.Class,
          as: 'class',
          attributes: [ 'name', 'abbreviation' ]
        }]
      });
           

      return res.status(200).json(students);
    } catch(e) {
      return res.status(403).json({error: String(e)})
    }
  },
 
}