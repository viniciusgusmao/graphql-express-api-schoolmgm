const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

const models = require("./models");
const routes = require("./routes")

var schema = buildSchema(`
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
  type Student{
    id: ID,
    name: String,
    email: String,
    enrollment: Int,
    class: Class
    parents: [Parent]
  }
  type Parent{
    id: ID,
    name: String,
    email: String
    students: [Student]
    type: String
  }
  type StudentParent {
    type: String
  }
  type Query {
    student(id: ID!): Student
    students: [Student]
    parents: [Parent]
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
  parents: async () => {
    const parents = await models.Parent.findAll({
      attributes: [ 'id', 'name', "email" ],
      include: [
        {
          association: "students",
          attributes: [ "id", "name", "email", "enrollment" ],
          through: {
            attributes: ["type"]
          }
        },
      ]
    });
    return parents;
  },
  students: async () => {
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

app.use(routes);

module.exports = app;