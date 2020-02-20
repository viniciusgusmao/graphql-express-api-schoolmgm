const express = require('express');
const graphqlHTTP = require('express-graphql');

const sc = require('./schema')
const studentController = require('./controllers/StudentController');
const classController = require('./controllers/ClassController');
const gradeController = require('./controllers/GradeController');
const courseController = require('./controllers/CourseController');
const parentController = require('./controllers/ParentController');

var providers = {
  classes: () => classController.classes(),
  class: ({id}) => classController.class(id),  
  grades: () => gradeController.grades(),
  grade: ({id}) => gradeController.grade(id),
  courses: () => courseController.courses(),
  course: ({id}) => courseController.course(id),
  parents: () => parentController.parents(),
  parent: ({id}) => parentController.parent(id),
  students: () => studentController.students(),  
  student: ({id}) => studentController.student(id),
};

const app = express();

app.use('/graphql', graphqlHTTP({
  schema: sc.schema,
  rootValue: providers,
  graphiql: true,
}));

module.exports = app;