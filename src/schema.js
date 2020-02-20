const { buildSchema } = require('graphql');

module.exports = {
  schema: buildSchema(`
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
    name: String!,
    email: String
  }  
  type Query {
    student(id: ID!): Student
    students: [Student]
    parents: [Parent]
    parent(id: ID!): Parent
    course(id: ID!): Course
    courses: [Course]
    grade(id: ID!): Grade
    grades: [Grade]
    class(id: ID!): Class
    classes: [Class]    
  }
  type Mutation{
    createCourse(name: String!, abbreviation: String): Course
    createGrade(name: String!, abbreviation: String, course_id: Int!): Grade
    createClass(name: String!, abbreviation: String, shift: String!, year: Int!, grade_id: Int!): Class
    createStudent(name: String!, email: String, enrollment: Int!, class_id: Int!): Student
  }
`)
}