const Listings = require("../models/listingsSchema");

const deleteByIdController = async (req,res) => {
    let {id} = req.params;
    try {
        await Listings.findByIdAndDelete(id);
        res.redirect("/");
        
    } catch (err) {}
}



module.exports =deleteByIdController; 