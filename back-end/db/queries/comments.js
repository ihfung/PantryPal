const db = require('../connection');

//add message 
const addMessage = function(message, recipe_id, user_id) {
  return db.one(`
    INSERT INTO comments
    (message, recipe_id, user_id)
    VALUES
    ($1, $2, $3)
    RETURNING *
  `, [message, recipe_id, user_id])
    .then(data => {
      console.log('DATA.ROWS', data.rows);
      return data.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

//get all messages by recipe id
const getMessagesByRecipeId = function(recipe_id) {
  return db.query(
    'SELECT * FROM comments WHERE recipe_id = $1;', [recipe_id])
    .then(data => {
      return data.rows;
    }).catch((err) => {
      console.log(err.message);
    });
};

//get all messages by user id
const getMessagesByUserId = function(user_id) {
  return db.query(
    'SELECT * FROM comments WHERE user_id = $1;', [user_id])
    .then(data => {
      return data.rows;
    }).catch((err) => {
      console.log(err.message);
    });
};

//delete message
const deleteMessage = function(user_id, id) {
  return db.query(
    'DELETE FROM comments WHERE user_id = $1 and id = $2 RETURNING *;', [user_id, id])
    .then(data => {
      return data.rows[0];
    }).catch((err) => {
      console.log(err.message);
    });
};

module.exports = {addMessage, getMessagesByRecipeId, getMessagesByUserId, deleteMessage};