const express = require('express');
const router = express.Router();
const userQueries = require('../db/queries/comments');

//get comments
router.get('/', (req, res) => {
  const recipeId =  req.query.recipeId;
  
  userQueries.getCommentsByRecipeId(recipeId)
  .then(comments => {
   
    res.json(comments);
  })
  .catch(error => res.status(400).json({ message: error.message }));
});


//add comment
router.post('/', (req, res) => {
  const comment = req.body.comment;
  const recipeId = req.body.recipeId;
  const ownerId = req.body.ownerId;
  console.log('Adding comment:', comment, 'to recipeId:', recipeId, 'by ownerId:', ownerId); 
  userQueries.addComment(comment, recipeId, ownerId)
    .then(() => {
      res.status(201).json({ message: 'Comment added successfully to recipe' });
    }).catch(error => {
      console.error('Error adding comment:', error);
      res.status(400).json({ message: error.message });
    });
});



module.exports = router;