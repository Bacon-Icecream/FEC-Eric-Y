const { QandA } = require('../database/models.js');

module.exports = {
  get: (req, res) => {
    // const { listName } = req.query;
    QandA.find({
    }, (err, qanda) => {
      if (err) { console.log(err) }
      else { res.status(200).send(qanda) }
    });
  },

  post: (req, res) => {
    // const {}
    res.status(201).send('Posted');
  }
}