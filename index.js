const express  = require("express");
const app  = express();
const path  = require("path");
const ejs  = require("ejs");
const addplaceRouter = require("./routers/addplaceRouter");
require("dotenv").config();
const PORT = process.env.PORT || 8000;
require("./config/database")(); // DataBase

// setting up ViewEngine

app.set("view engine",ejs);
app.set("views",path.resolve("./views"));

// setting up Middleware

app.use("/public",express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));

// Routes Middlewares


app.use("/addplace", addplaceRouter
  );



app.get("/",(req,res)=>
{
    res.render("index.ejs");
});



app.listen(PORT);