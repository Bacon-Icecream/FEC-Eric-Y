const { QandA } = require('../models.js');
const faker = require('faker');

var seedData = [];
for (var i = 0; i < 100; i++) {
  seedData.push({
    question: faker.lorem.words() + '?',
    answer: faker.lorem.sentence(),
    votes: faker.random.number({min: 0, max: 5}),
    answerer: faker.name.firstName(),
    date: faker.date.past(),
    listName: "QandA",
  })
}

QandA.insertMany(seedData);