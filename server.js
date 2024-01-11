// DEPENDENCIES
const express = require('express');
const path = require('path');
const routes = require('./routes/index');
const { create } = require('express-handlebars');

// DATA
const sequelize = require('./config/connection');

// APP/PORT
const app = express();
const PORT = process.env.PORT || 3000;

// TEMPLATE ENGINE
const hbs = create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', './views');

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// ROUTES
app.use(routes);

// START THE SERVER
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(`Server running http://localhost:${PORT}`),
  );
});
