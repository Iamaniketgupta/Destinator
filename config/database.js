const mongoose = require("mongoose");
const DB_URL = process.env.DB_URL;

const dbConnect = async () => {
    try {
        await mongoose.connect(DB_URL, {
            dbName: 'destinator_dev'
        });
        console.log("Connected to MongoDB Atlas!");
    } catch (err) {
        console.error("Error connecting to MongoDB Atlas:", err);
    }
}

module.exports = dbConnect;
