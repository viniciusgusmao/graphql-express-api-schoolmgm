const models = require("../models");

module.exports = {  
  async students() {
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
    return students;
  },
  async student(id){
    const student = await models.Student.findByPk(id,{
      include: [
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
    })
    return student;
  },
  async createStudent(name, email, enrollment, parents){
      const student = await models.Student.create({
        name, email, enrollment
      });
      for (parent of parents){
        let p = await models.Parent.create({
          name: parent.name,
          email: parent.email,
          createdAt: new Date(),
          updatedAt: new Date()
        })
        await student.addParent(p)
      }
      return student;
  }
 
}