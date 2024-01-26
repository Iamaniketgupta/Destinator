const Listings = require("../models/listingsSchema");

const showAllController = async () => {
    try {
        const result = await Listings.find({});
        return result;
    } catch (err) {
        console.log(err);
    }
}

module.exports = showAllController;
