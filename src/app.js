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
  createClass: ({name, abbreviation, shift, year, grade_id}) => classController.createClass(name,abbreviation, shift, year, grade_id),
  grades: () => gradeController.grades(),
  grade: ({id}) => gradeController.grade(id),
  createGrade: ({name, abbreviation, course_id}) => gradeController.createGrade(name,abbreviation, course_id),
  courses: () => courseController.courses(),
  course: ({id}) => courseController.course(id),
  createCourse: ({name, abbreviation}) => courseController.createCourse(name,abbreviation),
  parents: () => parentController.parents(),
  parent: ({id}) => parentController.parent(id),
  students: () => studentController.students(),  
  student: ({id}) => studentController.student(id),
  createStudent: ({name, email, enrollment, class_id }) => studentController.createStudent(name, email, enrollment, class_id),
};

const app = express();

app.use('/graphql', graphqlHTTP({
  schema: sc.schema,
  rootValue: providers,
  graphiql: true,
}));

module.exports = app;