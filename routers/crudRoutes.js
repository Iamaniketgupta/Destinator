const express = require("express");
const indexRouter = express.Router();
const showAllController = require("../controllers/showAllController");
const showByIdController = require("../controllers/showByIdController");
const editByIdController = require("../controllers/editByIdController");
const deleteByIdController = require("../controllers/deleteByidController");
const addPlaceController = require("../controllers/addPlaceController");

// INDEX

indexRouter.get("/", async (req, res) => {
    try {
        const result = await showAllController();
        res.render("index.ejs",{result});
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
});

// ADD PLACE

indexRouter.get("/addPlace", (req, res) => {
    res.render("./components/listPlace.ejs");
});
indexRouter.post("/addPlace/new", addPlaceController);

// READ SINGLE

indexRouter.get("/show/:id", async (req, res) => {
    try {
        const details = await showByIdController(req);
        res.render("./components/detailsPage.ejs",{details});
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
});

// EDIT

indexRouter.get("/:id/edit",async(req,res)=>{
    try {
        const values = await showByIdController(req);
        res.render("./components/editPage.ejs",{values});
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
} );

indexRouter.put("/:id/edit",editByIdController);


// DELETE

indexRouter.delete("/:id/delete",deleteByIdController);


module.exports = indexRouter;
