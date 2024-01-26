const express = require("express");
const addPlaceController = require("../controllers/addPlaceController");
const addplaceRouter = express.Router();

addplaceRouter.get("/", (req, res) => {
    res.render("./components/listPlace.ejs");
});

addplaceRouter.post("/new", addPlaceController);

module.exports = addplaceRouter;
