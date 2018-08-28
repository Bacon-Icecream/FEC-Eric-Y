const client = require('../Models/db-Postgres/database.js');

let controller = {
  get: (req, res) => {
    const query = {
      text: 'SELECT * FROM qanda WHERE votes = 5 ORDER BY date ASC LIMIT 10'
    }
    client.query(query, (err, qAndA) => {
      if (err) {
        console.log('error querying db from controller: ', err.stack);
      }
      res.status(200).send(qAndA.rows); 
    });
}};
module.exports = controller;
