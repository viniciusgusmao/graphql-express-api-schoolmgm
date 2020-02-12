require('dotenv').config({
  path: ".env"
})

module.exports = {
  dialect: process.env.DB_DIALECT,
  storage: process.env.DB_STORAGE
}