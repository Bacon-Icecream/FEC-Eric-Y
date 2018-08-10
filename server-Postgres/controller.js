const client = require('../Models/db-Postgres/database.js');

let controller = {
  get: (req, res) => {
    console.log('get request received');
    client.query('SELECT question FROM qanda HAVING votes = 5', (err, res) => {
      console.log(err ? err.stack : res.rows[0].message);
      client.end();
    })    
  },
  post: (req, res) => {
    console.log('post request received');
  }
}

module.exports = controller;
