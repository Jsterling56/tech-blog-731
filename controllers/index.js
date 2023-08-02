const router = require('express').Router();
const apiRoutes = require('./api');
const dashboardRoutes = require('./dashboard-routes.js');
const { Post, Comment, User } = require('../models');

// Import your helper functions if needed
// const helpers = require('../utils/helpers');

router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);

// Route for rendering the homepage
router.get('/', async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      // ... (your Post.findAll options)
    });

    const posts = dbPostData.map((post) => post.get({ plain: true }));

    res.render('homepage', {
      posts,
      // You can include other data you want to pass to the view
      // loggedIn: req.session.loggedIn,
      // helpers: helpers,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Catch-all 404 route
router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;