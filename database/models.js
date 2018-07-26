const mongoose = require('mongoose');
const connection = require('./index.js');

const qAndASchema = mongoose.Schema({
  question: {type: String, require: true},
  answer: {type: String, require: true},
  votes: {type: Number, require: true},
  answerer: {type: String, require: true},
  date: {type: String, require: true},
  listName: {type: String, require: true},
});

const QandA = mongoose.model('QandA', qAndASchema);

module.exports = { QandA };