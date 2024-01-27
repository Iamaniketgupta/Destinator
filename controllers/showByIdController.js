const Listings = require("../models/listingsSchema");

const showByIdController = async (req) => {
    let {id} = req.params;
    try {
        const details = await Listings.findById(id);
        return details;
    } catch (err) {}
}



module.exports = showByIdController;