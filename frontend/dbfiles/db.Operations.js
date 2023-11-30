// make a call to the local psql database
// ! Study code line 3 of this file in the https://node-postgres.com/ documentation so that you understand how pg is creating a Client object.
const { Client } = require('pg');
const { getDatabaseUri } = require('./dbConfig');

// This is the connection string for the database
// We are using the npm pg package to make the connection
// This variable is being set further down in this file to the return value of the getDatabaseUri function which is part of our connection string to the database
let dbUri;

// Here we are checking to see if we are in the test environment
// If we are in the test environment we want to use the test database which we did not create, if we did we would make that change here in this conditional statement and in the dbConfig.js file
if (process.env.NODE_ENV === 'test') {
  dbUri = getDatabaseUri();
} else {
  dbUri = process.env.DATABASE_URL || getDatabaseUri();
}

// * This is the connection to the database is being set using the connection string and setting the dbUri variable to the return value of the getDatabaseUri function which is part of our connection string to the database
const client = new Client({
  connectionString: dbUri,
});

// We are starting our calls to the database table employeedemographics here.

const getAllCertifications = async () => {
  const res = await client.query(`SELECT * FROM certifications`);
  return res.rows;
};

const createCertification = async (industry, name, description) => {
  const res = await client.query(
    `INSERT INTO certifications (industry, name, description) VALUES ($1, $2, $3) RETURNING *`,
    [industry, name, description]
  );
  return res.rows[0];
};

const deleteCertification = async (id) => {
  const res = await client.query(
    `DELETE FROM certifications WHERE id = $1 RETURNING *`,
    [id]
  );
  return res.rows[0];
};

const updateCertification = async (id, industry, name, description) => {
  const res = await client.query(
    `UPDATE certifications SET industry = $1, name = $2, description = $3 WHERE id = $4 RETURNING *`,
    [industry, name, description, id]
  );
  return res.rows[0];
};

console.log('dbUri: ', dbUri);
module.exports = {
  client,
  dbUri,
  getAllCertifications,
  createCertification,
  deleteCertification,
  updateCertification,
};
