const express = require('express');
const dbOperations = require('./dbfiles/db.Operations');
cors = require('cors');
const app = express();
const { PORT } = require('./dbfiles/dbConfig');
const Certification = require('./dbfiles/certification');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// * This function from file db.Operations.js is called here and makes the connection to the database
dbOperations.client.connect();

app.post('/api', async (req, res) => {
  // * For testing on the server side alone, comment out the above code and uncomment the code below
  res.send({ result: 'Hello from server!' });
});

app.post('/quit', async (req, res) => {
  console.log('Good Bye');
  // * For testing on the server side alone, comment out the above code and uncomment the code below
  res.send({ result: 'Good Bye' });
});

app.get('/certifications', async (req, res) => {
  const result = await dbOperations.getAllCertifications();
  res.send(result);
});

app.post('/certifications', async (req, res) => {
  const { industry, name, description } = req.body;
  const result = await dbOperations.createCertification(
    industry,
    name,
    description
  );
  res.send(result);
});

app.delete('/certifications/:id', async (req, res) => {
  const { id } = req.params;
  const result = await dbOperations.deleteCertification(id);
  res.send(result);
});

app.patch('/certifications/:id', async (req, res) => {
  const { id } = req.params;
  const { industry, name, description } = req.body;
  const result = await dbOperations.updateCertification(
    id,
    industry,
    name,
    description
  );
  res.send(result);
});

// * How we configured our server to return data from the database
// this is our app endpoint that will return the data from the database on our local machine
// We are listening for a GET request to the /api endpoint
// We set the port to 4000 dynamically using the PORT variable | see dbConfig.js
app.listen(PORT, function () {
  console.log(`Started on http://localhost:${PORT}`);
});
