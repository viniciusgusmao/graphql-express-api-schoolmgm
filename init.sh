#!/bin/bash
echo "1/5 - Removing database existent..."
rm -f database.sqlite
echo "FINISHED"
echo "2/5 - Creating a database.sqlite..."
touch database.sqlite
echo "FINISHED"
echo "3/5 - Setting CHMOD 777 to database.sqlite..."
chmod 777 database.sqlite
echo "FINISHED"
echo "4/5 - Running migrate..."
echo "FINISHED"
npx sequelize db:migrate
echo "5/5 - Running seeders..."
npx sequelize db:seed:all
echo "It could takes a few seconds"
node src/database/customSeeders/custom-seeder-student.js
node src/database/customSeeders/custom-seeder-parent.js
echo "FINISHED"

