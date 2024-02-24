const express = require('express');
const bodyParser = require('body-parser');
const { City } = require('../src/models/index');

const { PORT } = require('./config/serverConfig');
const CityRepository = require('./repository/city-repository');

const setupAndStartServer = async () => {
  // Create the express object
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, async () => {
    console.log(`Server is running at ${PORT}`);
  });
};

setupAndStartServer();
