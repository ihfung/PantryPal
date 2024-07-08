const db = require('../connection');

//add new user
const addUser = function(newUser) {
  return db.query(
    'INSERT INTO users (username, email, password, profile_pic, bio ) VALUES ($1, $2, $3, $4, $5) RETURNING *;', [newUser.username, newUser.email, newUser.password, newUser.profile_pic, newUser.bio])
    .then(data => {
      return data.rows[0];
    }).catch((err) => {
      console.log(err.message);
    });
};

//get user by email
const getUserByEmail = function(email) {
  return db.query(
    'SELECT * FROM users WHERE email = $1;', [email])
    .then(data => {
      return data.rows[0];
    }).catch((err) => {
      console.log(err.message);
    });
};

//get user by id
const getUserById = function(id) {
  return db.query(
    'SELECT * FROM users WHERE id = $1;', [id])
    .then(data => {
      return data.rows[0];
    }).catch((err) => {
      console.log(err.message);
    });
};

//get user by username
const getUserByUsername = function(username) {
  return db.query(
    'SELECT * FROM users WHERE username = $1;', [username])
    .then(data => {
      return data.rows[0];
    }).catch((err) => {
      console.log(err.message);
    });
};


module.exports = { addUser, getUserByEmail, getUserById, getUserByUsername };





















