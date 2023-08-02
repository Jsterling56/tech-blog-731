const express = require('express');
const router = express.Router();
const path = require('path');
const apiRoutes = require('./api'); // Import the apiRoutes module
const dashboardRoutes = require('./dashboard-routes.js');
const homeRoutes = require('./home-routes.js');
const { Post, Comment, User } = require(path.join(__dirname, '..', 'models'));

// ... (other imports)

// Define your routes here
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('home-routes', homeRoutes);
// Add more routes as needed

module.exports = router;