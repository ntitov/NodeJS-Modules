const db = require('./db');

const users = db.getUsers();

console.log(users);