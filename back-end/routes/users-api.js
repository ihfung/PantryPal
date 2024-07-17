const express = require('express');
const router = express.Router();
const userQueries = require('../db/queries/users');
const pool = require('../db/connection');


//Login routes
router.get("/login", (req, res) => {
  res.render('login', { user: req.session.userId });
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  userQueries
    .getUserByUsername(username)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      
      if (password !== user.password) {
        return res.status(401).json({ error: "Incorrect password" });
      }

      req.session.userId = user.user_id;
      res.json({
        id: user.user_id,
        username: user.username,
        profile_pic: user.profile_pic
      });
    })
    .catch((err) => {
      console.error("Error:", err);
      res.status(500).json({ error: "Server error" });
    });
});




router.get('/register', (req, res) => {
  res.render('register', { user: req.session.userId });
});

router.post("/register", (req, res) => {
  const { username, email, password } = req.body;
  userQueries
    .addUser({ username, email, password })
    .then((user) => {
      req.session.userId = user.user_id;
      res.send({
        id: user.user_id,
        username: user.username,
        email: user.email
      });
    })
    .catch((err) => res.send(err));
});

router.get("/", (req, res) => {
  const userId = req.session.userId;
  if (!userId) {
    return res.send({ message: "not logged in" });
  }

  userQueries
    .getUserById(userId)
    .then((user) => {
      if (!user) {
        return res.send({ error: "no" });
      }
      res.json(user);
    })
    .catch((e) => res.send(e));
});

router.post("/logout", (req, res) => {
  req.session.userId = null;
  res.redirect("/users/login");
});

//get user by id
router.get("/:id", (req, res) => {
  const userId = req.session.id;
  userQueries
    .getUserById(userId)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      res.json(user);
    })
    .catch((err) => res.send(err));
});


// Route to get user profile data
router.get('/profile/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    const result = await pool.query('SELECT username AS name, email, password, bio, profile_pic FROM users WHERE user_id = $1', [userId]);
    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error fetching profile data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Route to update user profile data
router.post('/editprofile', async (req, res) => {
  const { name, email, bio, password, profile_pic } = req.body;
  const userId = req.userId; 

  try {
    const result = await pool.query(
      'UPDATE users SET name = $1, email = $2, bio = $3, password = $4, profile_pic = $5 WHERE user_id = $6 RETURNING *',
      [name, email, bio, password, profile_pic, userId]
    );
    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error updating profile data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});




//edit user profile
// router.post("/edit/:id", (req, res) => {
//   const userId = req.session.id;
//   const { username, email, password, profile_pic, bio } = req.body;
//   userQueries
//     .editUserProfile({ username, email, password, profile_pic, bio, userId })
//     .then((user) => {
//       res.json(user);
//     })
//     .catch((err) => res.send(err));
// });


//get profile pic
// router.get("/profile/:id", (req, res) => {
//   const userId = req.session.id;
//   userQueries
//     .getUserProfilePic(userId)
//     .then((user) => {
//       res.json(user);
//     })
//     .catch((err) => res.send(err));
// });


module.exports = router;
