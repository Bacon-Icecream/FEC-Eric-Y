const { Client } = require('pg');
const client = new Client('postgres://localhost:5432/amazonqa');
client.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('connected to Postgres!');
  }
});

module.exports = client;



