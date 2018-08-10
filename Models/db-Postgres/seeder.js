const fs = require('fs');
const faker = require('faker');

fs.writeFile('data.csv', 'question, answer, votes, answerer, date, listName', (err) => {
  if (err) throw err;
  let seeder = (count = 1) => {
    if (count % 50000 === 0) {
      console.log('created data #', count);
    }
    if (count === 10000000) return;
    let question = faker.lorem.words() + '?';
    let answer = faker.lorem.sentence();
    let votes = faker.random.number({min: 0, max: 5});
    let answerer = faker.name.firstName();
    let date = faker.date.past();
    // let listName = "QandA";
    let singleData = '\n' + question + ', ' + answer + ', ' + votes + ', ' + answerer + ', ' + date + ', QandA';
    fs.appendFile('data.csv', singleData, (err) => {
      if (err) throw err;
      seeder(count + 1)
    });
  }
  seeder();
});


