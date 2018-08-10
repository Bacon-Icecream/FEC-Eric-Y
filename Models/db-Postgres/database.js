const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5000/amazonqa';

const client = new pg.Client(connectionString);
client.connect();
// const query = client.query(
  
// );

// client.end();

module.exports = client;



