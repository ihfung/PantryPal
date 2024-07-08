const db = require('../connection');

const addSaveRecipe = function(user_id, recipe_id) {
  return db.query(
    'INSERT INTO saved_recipes (user_id, recipe_id) VALUES ($1, $2) RETURNING *;', [user_id, recipe_id])
    .then(data => {
      return data.rows[0];
    }).catch((err) => {
      console.log(err.message);
    });
}