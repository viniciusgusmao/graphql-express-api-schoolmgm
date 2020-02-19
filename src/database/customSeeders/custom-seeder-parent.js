
const models = require("../../models");
const faker = require("faker");
faker.locale = "pt_BR";

(async () => {
  await models.Parent.destroy({
    where: {},
    truncate: false
  })
  const classes = await models.Student.findAll({
    attributes: ["id"]
  });
  let dynClasses, father, mother, type;
  for (cls of classes){
    dynClasses = await models.Student.findByPk(cls.id);
    type = "father";
    father = await models.Parent.create({
      name: faker.name.findName(),
      email: faker.internet.email(),
      createdAt: new Date(),
      updatedAt: new Date()
    })
    await dynClasses.addParent(father,{ through: { type } });  
    type = "mother";
    mother = await models.Parent.create({
      name: faker.name.findName(),
      email: faker.internet.email(),
      createdAt: new Date(),
      updatedAt: new Date()
    })
    await dynClasses.addParent(mother,{ through: { type } });  
  }  
})()

