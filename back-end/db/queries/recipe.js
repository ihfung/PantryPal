const db = require('../connection');

//add new recipe
const addRecipe = function(newRecipe) {
  return db.query(`Insert into recipes (title, description, ingredients, directions, user_id) VALUES ($1, $2, $3, $4, $5) RETURNING *;`, [newRecipe.title, newRecipe.description, newRecipe.ingredients, newRecipe.directions, newRecipe.user_id])
    .then(data => {
      return data.rows[0];
    }).catch((err) => {
      console.log(err.message);
    });
};
  

//get recipe by id
const getRecipeById = function(id) {
  return db.query(
    'SELECT * FROM recipes WHERE id = $1;', [id])
    .then(data => {
      return data.rows[0];
    }).catch((err) => {
      console.log(err.message);
    });
};

//get recipes
const getRecipes = function() {
  return db.query(
    'SELECT * FROM recipes ORDER BY id DESC LIMIT 10;')
    .then(data => {
      return data.rows;
    }).catch((err) => {
      console.log(err.message);
    });
};

//get recipes by user id
const getRecipesByUserId = function(id) {
  return db.query(
    'SELECT * FROM recipes WHERE user_id = $1 ORDER BY id DESC LIMIT 10;', [id])
    .then(data => {
      return data.rows;
    }).catch((err) => {
      console.log(err.message);
    });
};

//edit recipe
const editRecipe = function(recipe) {
  return db.query(
    'UPDATE recipes SET title = $1, description = $2, ingredients = $3, directions = $4 WHERE id = $5 RETURNING *;', [recipe.title, recipe.description, recipe.ingredients, recipe.directions, recipe.id])
    .then(data => {
      return data.rows[0];
    }).catch((err) => {
      console.log(err.message);
    });
};

//delete recipe
const deleteRecipe = function(id) {
  return db.query(
    'DELETE FROM recipes WHERE id = $1 RETURNING *;', [id])
    .then(data => {
      return data.rows[0];
    }).catch((err) => {
      console.log(err.message);
    });
};

//filter recipes by title
const filterRecipesByTitle = function(title) {
  return db.query(
    `SELECT * FROM recipes WHERE title ILIKE $1;`, ['%' + title + '%'])
    .then(data => {
      return data.rows;
    }).catch((err) => {
      console.log(err.message);
    });
};

//filter recipes by ingredients
const filterRecipesByIngredients = function(ingredients) {
  return db.query(
    `SELECT * FROM recipes WHERE ingredients ILIKE $1;`, ['%' + ingredients + '%'])
    .then(data => {
      return data.rows;
    }).catch((err) => {
      console.log(err.message);
    });
};

//filter recipes by directions
const filterRecipesByDirections = function(directions) {
  return db.query(
    `SELECT * FROM recipes WHERE directions ILIKE $1;`, ['%' + directions + '%'])
    .then(data => {
      return data.rows;
    }).catch((err) => {
      console.log(err.message);
    });
};

//filter by category
const filterRecipesByCategory = function(category) {
  return db.query(
    `SELECT * FROM recipes WHERE category = $1;`, [category])
    .then(data => {
      return data.rows;
    }).catch((err) => {
      console.log(err.message);
    });
};

module.exports = { addRecipe, getRecipeById, getRecipes, getRecipesByUserId, editRecipe, deleteRecipe, filterRecipesByTitle, filterRecipesByIngredients, filterRecipesByDirections, filterRecipesByCategory };