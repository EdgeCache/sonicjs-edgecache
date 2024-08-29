const { faker } = require('@faker-js/faker');

// npx wrangler d1 execute sonicjs-edgecache --local --file=./import.sql

const genders = ['Male', 'Female'];
const departments = [
  'Marketing',
  'Sales',
  'Engineering',
  'Human Resources',
  'Customer Service',
  'Finance',
  'Operations',
  'IT'
];
const regions = ['Northeast', 'Southwest', 'West', 'Southeast', 'Midwest'];

const count = 1000;
for (let index = 0; index < count; index++) {
  const id = makeid(14);
  const gender = genders[randomIntFromInterval(0, 1)];
  const firstName = faker.person.firstName(gender);
  const lasttName = faker.person.lastName();
  const fullName = `${firstName} ${lasttName}`;
  const department =
    departments[randomIntFromInterval(0, departments.length - 1)];
  const jobTitle = faker.person.jobTitle();
  const phone = `${randomIntFromInterval(100, 990)}-${randomIntFromInterval(
    100,
    990
  )}-${randomIntFromInterval(1000, 9999)}`;
  const region = regions[randomIntFromInterval(0, regions.length - 1)];
  const email = `${firstName.toLowerCase()}.${lasttName.toLowerCase()}@nowhere.com`;
  const sql = `insert into employees(id, firstName, lastName, fullName, email, phone, jobTitle, department, gender, region) values ("${id}","${firstName}","${lasttName}","${fullName}","${email}","${phone}","${jobTitle}","${department}","${gender}","${region}");`;
  console.log(sql);
}

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function makeid(length) {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}
// id: text('id').primaryKey(),
// firstName: text('firstName'),
// lastName: text('lastName'),
// fullName: text('fullName'),
// email: text('email'),
// phone: text('phone'),
// jobTitle: text('jobTitle'),
// department: text('department'),
// gender: text('gender'),
// region: text('region'),
// password: text('password'),
// role: text('role').$type<'admin' | 'user'>()

const sql = `insert into users(id, firstName, lastName, email, phone, jobTitle, department, gender, region) values`;
