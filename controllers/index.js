const express = require('express');
const router = express.Router();
const path = require('path');
const apiRoutes = require('./api');
const dashboardRoutes = require('./dashboard-routes.js');
const homeRoutes = require('./home-routes.js');
const { Post, Comment, User } = require(path.join(__dirname, '..', 'models'));

// ... (other imports)

// Define your routes here
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/', homeRoutes); // Change the route to use the root path '/'
// Add more routes as needed

module.exports = router;