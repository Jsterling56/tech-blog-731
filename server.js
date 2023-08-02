const path = require('path');
const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection'); // Adjust the path as needed
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');
const hbs = exphbs.create({
  helpers: helpers
});

const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars view engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Parse incoming JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use routes defined in the 'controllers' module
app.use(routes);

// Synchronize Sequelize models with the database
sequelize.sync().then(() => {
  // Start the Express application
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});