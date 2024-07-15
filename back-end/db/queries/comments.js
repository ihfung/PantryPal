const db = require('../connection');

//add message 
const addComment = function(comment_text, recipe_id, user_id) {
  return db.query(`
    INSERT INTO comments
    (comment_text, recipe_id, user_id)
    VALUES
    ($1, $2, $3)
    RETURNING *;
  `, [comment_text, recipe_id, user_id])
    .then(data => {
      console.log('DATA.ROWS', data.rows);
      return data.rows;
    })
    .catch((err) => {
      console.log(err.message);
      throw new Error('Failed to add comment');
    });
};

//get all messages by recipe id
const getCommentsByRecipeId = function(recipe_id) {
  return db.query(
    'SELECT * FROM comments WHERE recipe_id = $1;', [recipe_id])
    .then(data => {
      return data.rows;
    }).catch((err) => {
      console.error('Error in getCommentsByRecipeId:', err.message);
      throw err; 
    });
};

//get all messages by user id
const getCommentsByUserId = function(user_id) {
  return db.query(
    'SELECT * FROM comments WHERE user_id = $1;', [user_id])
    .then(data => {
      return data.rows;
    }).catch((err) => {
      console.log(err.message);
    });
};

//delete message
const deleteComment = function(user_id, id) {
  return db.query(
    'DELETE FROM comments WHERE user_id = $1 and id = $2 RETURNING *;', [user_id, comment_id])
    .then(data => {
      return data.rows[0];
    }).catch((err) => {
      console.log(err.message);
    });
};

module.exports = {addComment, getCommentsByRecipeId, getCommentsByUserId, deleteComment};