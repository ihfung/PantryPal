const db = require('../connection');

//add new saved recipe
const addSaveRecipe = function(user_id, recipe_id) {
  return db.query(
    'INSERT INTO saved_recipes (user_id, recipe_id) VALUES ($1, $2) RETURNING *;', [user_id, recipe_id])
    .then(data => {
      return data.rows[0];
    }).catch((err) => {
      console.log(err.message);
    });
};

//

//remove saved recipe
const removeSaveRecipe = function(user_id, recipe_id) {
  return db.query(
    'DELETE FROM saved_recipes WHERE user_id = $1 AND recipe_id = $2 RETURNING *;', [user_id, recipe_id])
    .then(data => {
      return data.rows[0];
    }).catch((err) => {
      console.log(err.message);
    });
};

//get all saved recipes
const getSavedRecipes = function(user_id) {
  return db.query(
    'SELECT * FROM saved_recipes WHERE user_id = $1;', [user_id])
    .then(data => {
      return data.rows;
    }).catch((err) => {
      console.log(err.message);
    });
};

module.exports = {addSaveRecipe, removeSaveRecipe, getSavedRecipes};