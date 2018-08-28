const { Client } = require('pg');
// const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5000/amazonqa';
// 'postgres://localhost:5000/amazonqa';

// const client = new Client({
//   host: 'localhost',
//   port: 5000
// });
const client = new Client('postgres://localhost:5432/amazonqa');
console.log('connecting to Postgres...');
client.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('connected to Postgres!');
  }
});

module.exports = client;



