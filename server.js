const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

const sess = {
  cookie: {},
  resave: false,
  saveUninitialized: true,
};

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.use('/api', apiRoutes);
app.use('/dashboard', dashboardRoutes);

sequelize.sync();

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});