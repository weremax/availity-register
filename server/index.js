// setup basic initial server to expand for proxy api calls

const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

// to setup a mock api endpoint
// curl -v -X GET 'https://weremax.free.beeceptor.com/my/api/path' -H 'some-header: some-value'

// https://weremax.free.beeceptor.com/registration
// https://weremax.free.beeceptor.com/registration_error

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);