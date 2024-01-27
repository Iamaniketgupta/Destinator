const { Schema, model } = require("mongoose");

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
        default: "https://static.vecteezy.com/system/resources/previews/008/015/799/original/illustration-of-no-image-available-icon-template-for-no-image-or-picture-coming-soon-free-vector.jpg",
    },

    price: {
        type: Number,
        required: true,
    },

    location: {
        type: String,
        required: true,
    },

    country: {
        type: String,
        required: true,
    },

});

module.exports = model("Listings", listingSchema);