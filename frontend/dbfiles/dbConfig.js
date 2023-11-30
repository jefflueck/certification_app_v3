// 'use strict';

/** Shared config for application; can be required many places. */

// This npm package is used to read the .env file and set the environment variables
// This allows us to not have to hard code the environment variables in our code the package will read the .env file and set the environment variables for us
// It handles the case where the .env file is not present
require('dotenv').config();

// Secret key for signing JWTs.  Set this to a long random string.
const SECRET_KEY = process.env.SECRET_KEY || 'secret-dev';

// Port for server to run on
// The + in front of process.env.PORT is to convert the string to a number
const PORT = +process.env.PORT || 4000;

// Use dev database, see MLB-backend for a production database setup.
// See files config.js, server.js and limited parts of db.js for more info.

// We make this function so that we can use the same code for testing and development
// It makes our connection to the database and returns the connection string
function getDatabaseUri() {
  return process.env.DATABASE_URL || 'certification';
}

// We export all of these variables so that we can use them in db.operations.js
module.exports = {
  PORT,
  SECRET_KEY,
  getDatabaseUri,
};
