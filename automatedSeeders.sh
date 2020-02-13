#!/bin/bash

# Este script rodará os seeders para preencher as tabelas do banco

npx sequelize db:seed:undo:all
npx sequelize db:seed:all

