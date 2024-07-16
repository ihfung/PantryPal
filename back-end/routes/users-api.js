const express = require('express');
const router = express.Router();
const userQueries = require('../db/queries/users');


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

      res.send({
        user: {
          name: user.user_name,
          email: user.email,
          id: user.user_id,
        },
      });
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

//edit user profile
router.post("/edit/:id", (req, res) => {
  const userId = req.session.id;
  const { username, email, password, profile_pic, bio } = req.body;
  userQueries
    .editUserProfile({ username, email, password, profile_pic, bio, userId })
    .then((user) => {
      res.json(user);
    })
    .catch((err) => res.send(err));
});


//get profile pic
router.get("/profile/:id", (req, res) => {
  const userId = req.session.id;
  userQueries
    .getUserProfilePic(userId)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => res.send(err));
});


module.exports = router;
