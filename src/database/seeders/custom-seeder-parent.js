
const models = require("../../models");
const faker = require("faker");
faker.locale = "pt_BR";

(async () => {
  const classes = await models.Class.findAll({
    attributes: ["id"]
  });
  const min = classes[0].id
  const max = classes[classes.length - 1].id
  let students = [];
  for (let i = 0; i < 200; i++){
    students.push({
      name: faker.name.findName(),
      email: faker.internet.email(),
      enrollment: faker.random.number(),
      class_id: Math.floor(Math.random() * (max - min)) + min,
      createdAt: new Date(),
      updatedAt: new Date()
    })
  }
  await models.Student.destroy({
    where: {},
    truncate: false
  })
  await models.Student.bulkCreate(students);
})()

