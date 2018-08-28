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






const faker = require('faker');
const fs = require('fs');
// var read = fs.createReadStream('./read');
let write = fs.createWriteStream('./data.csv');
const stream = require('stream');
const {
  RestaurantModel,
  ReviewModel,
} = require('./models.js');

function writeOneMillionTimes(writer, data, encoding, callback) {
  let i = 10 ** 7;
  write();
  function write() {
    let ok = true;
    const model = [
      i.toString(), // reviewId:
      faker.company.catchPhrase, // restaurant:
      Math.floor(Math.random() * 5), // rating:
      faker.lorem.paragraph(), // text:
      faker.image.food(), // review_pic:
      faker.image.avatar(), // image_url:
      faker.name.findName(), // name:
      faker.address.city(), // location:
      Math.floor(Math.random() * 100), // friends:
      Math.floor(Math.random() * 100), // reviews:
      Math.floor(Math.random() * 100), // photos:
      Math.random() > 0.5, // elite:
      // faker.date.past(), // time_created:
      '2018-01-01 00:00:00.00',
    ];
    do {
      i--;
      if (i === 0) {
        // last time!
        //   fs.appendFile('data.csv', `\n${model.join(',')}`, (err) => {
        writer.write(`\n${model.join(',')}`, encoding, callback);
      } else {
        // see if we should continue, or wait
        // don't pass the callback, because we're not done yet.
        ok = writer.write(`\n${model.join(',')}`, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // had to stop early!
      // write some more once it drains
      writer.once('drain', write);
    }
  }
}
