const express = require('express');
const router = express.Router();
const pool = require('../db/connection');



// Check if a user has liked a recipe
router.get('/like-status/:user_id/:recipe_id', async (req, res) => {
    const user_id = req.params.user_id;
    const recipe_id = req.params.recipe_id;
    console.log('Like status query result:', user_id);
    try {
        const result = await pool.query('SELECT * FROM likes WHERE user_id = $1 AND recipe_id = $2', [user_id, recipe_id]);
        const hasLiked = result.rows.length > 0;
        res.status(200).json({ hasLiked });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Like a recipe
router.post('/like', async (req, res) => {
    console.log('Request body:', req.body);
    // const { user_id, recipe_id } = req.body;
    const user_id = req.body.user_id;
    const recipe_id = req.body.recipe_id;
    console.log('Like request received with:', user_id, recipe_id);
    try {
        const result = await pool.query(
            'INSERT INTO likes (user_id, recipe_id) VALUES ($1, $2) ON CONFLICT DO NOTHING RETURNING *',
            [user_id, recipe_id]
        );
        console.log('Like inserted result:', result.rows);
        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Unlike a recipe
router.delete('/like', async (req, res) => {
    // const { user_id, recipe_id } = req.query;
    const user_id = req.body.user_id;
    const recipe_id = req.body.recipe_id;
    try {
        await pool.query('DELETE FROM likes WHERE user_id = $1 AND recipe_id = $2', [user_id, recipe_id]);
        res.json({ message: 'Recipe unliked' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


// Get like count for a recipe
router.get('/likes/:recipe_id', async (req, res) => {
    // const { recipe_id }= req.params;
    const recipe_id = req.params.recipe_id;
    try {
        const result = await pool.query('SELECT COUNT(*) FROM likes WHERE recipe_id = $1', [recipe_id]);
        res.status(200).json({ count: result.rows[0].count });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
module.exports = router;
