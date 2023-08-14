const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const helpers = require('./utils/helpers')
const session = require('express-session');
const routes = require('./controllers'); // Assuming your routes are defined in a file like controllers/index.js
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store)
const PORT = process.env.PORT || 3000;

const app = express();
const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 60 * 60 * 1000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  //   Sets up session store
  store: new SequelizeStore({
    db: sequelize,
  }),
};
// rfnkurle@gmail.com
app.use(session(sess));
const hbs = exphbs.create({helpers});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);
sequelize.sync({force:false}).then (function(){
  app.listen(PORT, () => {
    console.log('Server is running on port 3000');
  });
})

