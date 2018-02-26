const fs = require('fs');
const faker = require('faker');

const db = { jobs: {} };
for (let i = 1; i <= 20; i++) {
  db.jobs[i] = {
    id: i,
    jobTitle: faker.name.jobTitle(),
    jobArea: faker.name.jobArea(),
    category: faker.name.jobDescriptor(),
    type: faker.name.jobType(),
    description: faker.lorem.paragraph(),
    image: faker.image.business()
  };
}
fs.writeFile('src/models/db.json',JSON.stringify(db), err => {
  if (err) throw err;
  console.log('database created!');
});
// console.log(db);
