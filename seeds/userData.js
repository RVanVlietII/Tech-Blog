const { User } = require('../models');

const userData = [
  {
    username: "Alan",
    email: "alan1@gmail.com",
    password: "test1234"
  },
  {
    username: "Bill",
    email: "bill1@hotmail.com",
    password: "test1234"
  },
  {
    username: "Cole",
    email: "cole1@gmail.com",
    password: "test1234"
  },
  {
    username: "Daniela",
    email: "daniela1@gmail.com",
    password: "test1234"
  },
  {
    username: "Ernie",
    email: "ernie1@gmail.com",
    password: "test1234"
  }
];

const seedUsers = () => User.bulkCreate(userData);


module.exports = seedUsers;