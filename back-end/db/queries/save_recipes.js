const db = require('../connection');

//add new saved recipe
const addSaveRecipe = function(user_id, recipe_id) {
  return db.query(
    'INSERT INTO save_recipe (user_id, recipe_id) VALUES ($1, $2) RETURNING *;', [user_id, recipe_id])
    .then(data => {
      return data.rows[0];
    }).catch((err) => {
      console.log(err.message);
    });
};


//remove saved recipe
const removeSaveRecipe = function(user_id, recipe_id) {
  return db.query(
    'DELETE FROM save_recipe WHERE user_id = $1 AND recipe_id = $2 RETURNING *;', [user_id, recipe_id])
    .then(data => {
      return data.rows[0];
    }).catch((err) => {
      console.log(err.message);
    });
};

//get all saved recipes
const getSavedRecipesByUserId = function(user_id) {
  return db.query('SELECT recipes.*, users.profile_pic FROM recipes JOIN save_recipe ON save_recipe.recipe_id = recipes.recipe_id  JOIN users ON recipes.user_id = users.user_id WHERE save_recipe.user_id = $1 ORDER BY save_recipe.created_at DESC;', [user_id])
    .then(data => {
      console.log(data.rows);
      return data.rows;
    }).catch((err) => {
      console.log(err.message);
    });
};

module.exports = {addSaveRecipe, removeSaveRecipe, getSavedRecipesByUserId};