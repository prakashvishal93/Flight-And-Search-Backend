const express = require('express');
const { PORT } = require('./config/serverConfig');

const setupAndStartServer = async () => {
  // Create the express object
  const app = express();
  app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
    console.log(process.env);
  });
};

setupAndStartServer();
