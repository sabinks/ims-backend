# Inventory Management System for Book - Frontend

## Node version
- 22.0.0

## Step
* Start by installing the Prisma CLI as a development dependency in your project:
- npm install prisma --save-dev
- npx prisma
- npx prisma init

* add key/value in .env file
DATABASE_URL="mysql://user:P@ss1234@localhost:3306/demo_db?schema=public"

* run migration command 
npx prisma migrate dev --name init