const express  = require("express");
const app  = express();
const path  = require("path");
const ejs  = require("ejs");
const methodOverride = require("method-override");
const indexRouter = require("./routers/crudRoutes");
require("dotenv").config();
const PORT = process.env.PORT || 8000;
require("./config/database")(); // DataBase

// setting up ViewEngine

app.set("view engine",ejs);
app.set("views",path.resolve("./views"));

// Middlewares

app.use("/public",express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));

// Routes
app.use("/", indexRouter);

// Server
app.listen(PORT);