const { QAModel } = require('../Models/db-Cassandra/database.js');
let count = 0;
let controller = {
  get: (req, res) => {
    count < 10000 ? count++ : count = 1;
    if (count === 1) {
      console.time("dbsave");
    }
    QAModel.find({votes: 5, $limit: 10}, function(err, qAndA){
      if (err) throw err;
      if (count === 10000) {
        console.timeEnd("dbsave");
      }
      res.status(200).send(qAndA);
    });
  }
}

  module.exports = controller;