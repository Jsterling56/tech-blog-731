const router = require('express').Router();
const path = require('path');
const { User, Post, Comment } = require(path.join(__dirname, '../../models'));
const withAuth = require('../../utils/auth');

// Get all posts
router.get('/', async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      // ... (your Post.findAll options)
    });

    const posts = dbPostData.map((post) => post.get({ plain: true }));

    res.render('homepage', {
      posts,
      // loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Create a new post
router.post('/', withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      title: req.body.title,
      content: req.body.content,
      user_id: req.session.user_id, // Assuming you have a user_id in the session
    });

    res.status(200).json(newPost);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// ... (other routes)

module.exports = router;