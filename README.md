# Inventory Management System for Book - Frontend

## Node version

- 22.0.0

## Step

# Install Node Dependencies

- npm i

# Start by installing the Prisma CLI as a development dependency in your project:

- npm install prisma --save-dev

# Run command to initialize prisma

- npx prisma
- npx prisma init

# make .env file and add key/value in .env file

DATABASE_URL="mysql://user:P@ss1234@localhost:3306/demo_db?schema=public"

# Run migration command

- npx prisma migrate dev --name init

# Run backend server in watch mode

- npm run start:dev
