#!/bin/bash

# Exclui o banco criado
rm -f database.sqlite
# Cria um novo banco de dados zerado
touch database.sqlite
# Configura a permissão de escrita para o banco de dados criado
chmod 777 database.sqlite
# Cria as tabelas no banco de dados
npx sequelize db:migrate
# Preencher as tabelas com os dados fictícios
npx sequelize db:seed:all
node src/database/customSeeders/custom-seeder-student.js
node src/database/customSeeders/custom-seeder-parent.js


