
# Mini School Management System
> This is a sample project in Nodejs using Express and Graphql as it main technologies.

## Overview and Goals
 This is sample project using Express and Graphql as it main technologies. My goal with it is practice and improve my skills in Nodejs, and, consequently, share experiency and a bit knowledge with commnutity.
 
Was built a mini School Management System, with a few tables representing a  basic structure   existing in a school, like: courses, grades, classes, students and parents.

### Data modeling
![Data modeling](https://i.ibb.co/ctCtMKv/Mini-School-Management.jpg)

### Screenshots
![Graphql demonstration 1](https://i.ibb.co/7r3gpdT/Captura-de-tela-de-2020-02-20-22-14-24.png)

![Graphql demonstration 2](https://i.ibb.co/7QJ2gnF/Captura-de-tela-de-2020-02-20-22-23-02.png)

![enter image description here](https://i.ibb.co/wLs4Z13/Captura-de-tela-de-2020-02-20-22-28-01.png)

### Basic features
  - Fetch courses, grades, classes, students and parents.
 - Create courses, grades, classes and students.

### Main technologies used
 - Nodejs
 - Express
 - Graphql
 - Sequelize
 - Sqlite database

## Installation

**Prerequisites**: Nodejs, NPM, and Git Bash installed.

Please execute all the commands below on the root folder project.
### 1. Install dependencies
```js
npm install
```
### 2. Run migrate and seeders
```js
./init.sh
```
### 3. Start server
```js
npm start
```
After that, the server will be running at the port 3333. Access http://localhost:3333/graphql to test the API or use a client like Apollo to make the requests.
 
 
