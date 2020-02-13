const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

const models = require("./models");
const routes = require("./routes");

var schema = buildSchema(`
  type Parent{
    id: ID,
    name: String,
    email: String
  }
  type Course {
    id: ID,
    name: String,
    abbreviation: String
  }
  type Grade {
    id: ID,
    name: String,
    abbreviation: String,
    course: Course
  }
  type Class {
    id: ID,
    name: String,
    abbreviation: String,
    shift: String,
    year: Int,
    grade: Grade
    students: [Student]
  }
  type Student {
    id: ID,
    name: String,
    email: String,
    enrollment: Int,
    class: Class,
    parent: [Parent]    
  }
  type Query {
    student(id: ID!): Student
    students: [Student]
    course(id: ID!): Course
    courses: [Course]
    grade(id: ID!): Grade
    grades: [Grade]
    class(id: ID!): Class
    classes: [Class]    
  }
`);

var providers = {
  classes: async () => {
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
  grades: async () => {
    const grades = await models.Grade.findAll({
      attributes: ["id", "name", "abbreviation"],
      include: [{
        association: "course",
        attributes: [ "id", "name", "abbreviation"]
      }]
    });
    return grades;
  },
  courses: async () => {
    const courses = await models.Course.findAll();
    return courses;
  },
  students: async () => {
    const students = await models.Student.findAll({
      attributes: [ 'id', 'name', "email", "enrollment" ],
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
    });
    return students;
  },
  student: async ({ id }) => {
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
  }
};

const app = express();

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: providers,
  graphiql: true,
}));

// app.use(express.json());
// app.use(routes);

module.exports = app;