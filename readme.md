# Welcome to Flights Service

## Project Setup

- Clone the project on the local
- Execute `npm install` on the same path as of your root directory of the downloaded project
- Create a `.env` file in the root directory and add the following environment variable
  - `PORT = 3000`
- Inside the `src/config` folder, create a new file `config.json` and then add the following piece of json

  ```
  {
  "development": {
    "username": "YOUR_DB_LOGIN_NAME",
    "password": "RadheRadhe",
    "database": "YOUR_DB_PASSWORD",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
  }

  ```

- Once you have added your db config as listed above, go to the src folder from the terminal and execute `npx sequelize db:create`
