const db = require('../connection');

// add new recipe
const addRecipe = function(newRecipe) {
  return db.query(
    `INSERT INTO recipes (title, description, ingredients, directions, user_id, img) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;`,
    [newRecipe.title, newRecipe.description, newRecipe.ingredients, newRecipe.directions, newRecipe.userId, newRecipe.image]
  )
    .then(data => {
      return data.rows[0];
    })
    .catch(err => {
      console.log(err.message);
    });
};

// get recipes by id
const getRecipeById = function(id) {
  return db.query(
    'SELECT * FROM recipes WHERE recipe_id = $1;', [id])
    .then(data => {
      return data.rows[0];
    })
    .catch(err => {
      console.log(err.message);
    });
};

// get all recipes
const getAllRecipes = function() {
  return db.query(
    'SELECT * FROM recipes ORDER BY id DESC LIMIT 10;')
    .then(data => {
      return data.rows;
    })
    .catch(err => {
      console.log(err.message);
    });
};

// get recipes by user id
const getRecipesByUserId = function(id) {
  return db.query(
    'SELECT recipes.*, users.profile_pic FROM recipes JOIN users ON recipes.user_id = users.user_id WHERE recipes.user_id = $1 ORDER BY recipes.recipe_id DESC LIMIT 10;', [id])
    .then(data => {
      return data.rows;
    })
    .catch(err => {
      console.log(err.message);
    });
};

// edit recipe
const editRecipe = function(recipe) {
  return db.query(
    'UPDATE recipes SET title = $1, description = $2, ingredients = $3, directions = $4 WHERE id = $5 RETURNING *;',
    [recipe.title, recipe.description, recipe.ingredients, recipe.directions, recipe.id]
  )
    .then(data => {
      return data.rows[0];
    })
    .catch(err => {
      console.log(err.message);
    });
};

// delete recipe
const deleteRecipe = function(userId, id) {
  return db.query(
    'DELETE FROM recipes WHERE recipes.user_id =$1 AND recipes.recipe_id = $2 RETURNING *;', [userId, id])
    .then(data => {
      return data.rows[0];
    })
    .catch(err => {
      console.log(err.message);
    });
};

const deleteRecipeFromCategory = function(id) {
  return db.query(
    'DELETE FROM recipe_category WHERE recipe_id = $1;', [id])
    .then(data => {
      return data.rows[0];
    })
    .catch(err => {
      console.log(err.message);
    });
};

const deleteRecipeFromFav = function(id) {
  return db.query(
    'DELETE FROM save_recipe WHERE recipe_id = $1;', [id])
    .then(data => {
      return data.rows[0];
    })
    .catch(err => {
      console.log(err.message);
    });

};

const deleteRecipeFromLike = function(id) {
  return db.query(
    'DELETE FROM likes WHERE recipe_id = $1;', [id])
    .then(data => {
      return data.rows[0];
    })
    .catch(err => {
      console.log(err.message);
    });

};


const deleteRecipeFromComment = function(id) {
  return db.query(
    'DELETE FROM comments WHERE recipe_id = $1;', [id])
    .then(data => {
      return data.rows[0];
    })
    .catch(err => {
      console.log(err.message);
    });

};


const filterRecipesByCategory = function(category) {
  return db.query(
    `SELECT recipes.*, users.profile_pic
    FROM recipes
    JOIN users ON recipes.user_id = users.user_id
    WHERE recipes.category_id = $1;`, [category])
    .then(data => {

      return data.rows;
    })
    .catch(err => {
      throw new Error(`Error filtering recipes by category: ${err.message}`);
    });
};


// search recipes by title, ingredients, or directions
const searchRecipes = function (query) {
  return db.query(
    `SELECT recipes.recipe_id, recipes.title, recipes.description, recipes.img, users.profile_pic as profile_pic
     FROM recipes
     JOIN users ON recipes.user_id = users.user_id
     WHERE recipes.title ILIKE $1
     OR recipes.description ILIKE $1 
     OR recipes.ingredients ILIKE $1 
     OR recipes.directions ILIKE $1;`,
    ['%' + query + '%']
  )
    .then(data => {
      return data.rows;
    })
    .catch(err => {
      console.log(err.message);
    });
};

// get recipes with user profile pictures
const getRecipesWithUserProfiles = function () {
  return db.query(
    `SELECT recipes.recipe_id, recipes.title, recipes.description, recipes.img, users.profile_pic as profile_pic
     FROM recipes 
     JOIN users ON recipes.user_id = users.user_id ORDER BY RANDOM()
            LIMIT 16;
        ;`
  )
    .then(data => {
      return data.rows;
    })
    .catch(err => {
      console.log(err.message);
    });
};

module.exports = {
  addRecipe,
  getRecipeById,
  getAllRecipes,
  getRecipesByUserId,
  editRecipe,
  deleteRecipe,
  searchRecipes,
  filterRecipesByCategory,
  getRecipesWithUserProfiles,
  deleteRecipeFromCategory,
  deleteRecipeFromFav,
  deleteRecipeFromLike,
  deleteRecipeFromComment
};
