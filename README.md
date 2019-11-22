# Tate Collection API

## Setup

- Clone this repo
- `npm i` to install required packages
- Set database connection in `knexfile.js`
- Create tables with **init.sql**.
- `npm start` to start the server

## Features

- `knex` query building
- `objection` ORM
- Security middleware (`cors`, `helmet`)
- Centralized error handling
- ES6 syntax with airbnb code style

## Notes

Originally, I had planned to leverage the migration and seed functionality of `knex` to facilitate the creation and population of the postgresql db. Unfortunately, I ran into some issues while attempting to transform the given CSV into a seed, and so abandoned this approach for the sake of time. You can view the progress I made within the **db** folder.

## Future Improvements

- Get the CSV transformer working to allow for `knex` db migration
- Authentication with `passport` and `bcrypt`
- Validation with `express-validator`
