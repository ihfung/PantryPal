const express = require('express');
const router = express.Router();
const pool = require('../db/connection');
const userQueries = require('../db/queries/recipe');


//edit recipe
router.get('/edit/:id', (req, res) => {
  const recipeId = req.params.id;
  userQueries.getRecipe(recipeId)
    .then(recipe => {
      res.render('edit_recipe', { user: req.session.userId, recipe: recipe });
    });
});

router.post('/:id/edit_recipe', (req, res) => {
  const userId = req.session.userId;
  if (!userId) {
    res.redirect('/login');
    return res.send({ error: "User not logged in!" });
  }

  const recipeId = req.params.id;
  const { title, description, ingredients, directions, img } = req.body;

  userQueries.editRecipe({ title, description, ingredients, directions, img, recipeId })
    .then(recipe => {
      res.redirect('/recipes');
    }).catch(error => {
      res.status(400).json({ message: error.message });
    });
});

//delete recipe
router.post('/:id/delete', (req, res) => {
  const userId = req.session.userId;
  const recipeId = req.params.id;

  if (!userId) {
    return res.send({ error: "User not logged in!" });
  }
  userQueries.deleteRecipeFromComment(recipeId)
    .then(() => {
      return userQueries.deleteRecipeFromLike(recipeId);
    }).then(() => {
      return userQueries.deleteRecipeFromFav(recipeId);
    }).then(() => {
      return userQueries.deleteRecipeFromCategory(recipeId);
    }).then(() => {
      return userQueries.deleteRecipe(userId, recipeId);
    }).then((deleteRecipe) => {
      res.json(deleteRecipe);
      // res.redirect('/recipes');
    }).catch(error => {
      res.status(400).json({ message: error.message });
    });
});


//get all recipes made by a user
router.get('/', async (req, res) => {
  const userId = req.session.userId;
  userQueries.getRecipesByUserId(userId)
    .then(recipes => {
      res.json(recipes);
    }).catch(error => {
      res.status(400).json({ message: error.message });
    });
});



module.exports = router;