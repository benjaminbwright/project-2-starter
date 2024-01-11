// DEPENDENCIES
const express = require("express");
const path = require("path");
const routes = require("./routes/index");

// DATA

// APP/PORT
const app = express();
const PORT = process.env.PORT || 3000;

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// ROUTES
app.use(routes);

// START THE SERVER
app.listen(PORT, () => console.log(`Server running http://localhost:${PORT}`));
