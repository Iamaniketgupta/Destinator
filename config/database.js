
const mongoose = require("mongoose");
const DB_URL = process.env.DB_URL;

const dbConnect = async()=>{
    try{

        await mongoose.connect(`${DB_URL}/destinator_dev`)
        .then(console.log("Connected to DB"));

    }
    catch(err){
        console.log(err);
    }
}

module.exports = dbConnect; 