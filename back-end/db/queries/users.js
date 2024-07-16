const db = require('../connection');

//add user
const addUser = function(newUser) {
  return db.query(
    'INSERT INTO users (username, email, password, profile_pic, bio) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    [newUser.username, newUser.email, newUser.password, newUser.profile_pic, newUser.bio]
  )
    .then(data => {
      if (data.rows.length > 0) {
        return data.rows[0]; // Return the first row (inserted user)
      } else {
        throw new Error('No user inserted');
      }
    })
    .catch(err => {
      console.error('Error inserting user:', err.message);
      throw err; // Propagate the error for handling in the calling code
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
    'SELECT * FROM users WHERE user_id = $1;', [id])
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

//edit user profile
const editUserProfile = function(user) {
  return db.query(
    'UPDATE users SET username = $1, email = $2, password = $3, profile_pic = $4, bio = $5 WHERE user_id = $6 RETURNING *',
    [user.username, user.email, user.password, user.profile_pic, user.bio, user.userId]
  )
    .then(data => {
      if (data.rows.length > 0) {
        return data.rows[0]; // Return the first row (updated user)
      } else {
        throw new Error('No user updated');
      }
    })
    .catch(err => {
      console.error('Error updating user:', err.message);
      throw err; // Propagate the error for handling in the calling code
    });
};

//get user profile pic
const getUserProfilePic = function(id) {
  return db.query(
    'SELECT * FROM users WHERE user_id = $1;', [id])
    .then(data => {
      return data.rows[0];
    }).catch((err) => {
      console.log(err.message);
    });
};


module.exports = { addUser, getUserByEmail, getUserById, getUserByUsername, editUserProfile, getUserProfilePic };





















