const Listings = require("../models/listingsSchema");

const editByIdController = async (req,res) => {
    let {id} = req.params;
    try {
        await Listings.findByIdAndUpdate(id, {...req.body});
        res.redirect("/");
        
    } catch (err) {}
}



module.exports =editByIdController;