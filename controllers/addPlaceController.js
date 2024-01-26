const{create} =require("mongoose");
const Listings = require("../models/listingsSchema");
const addPlaceController = async (req,res)=>{
    const{title,description,image,price,location,country} = req.body;
    try{

        await Listings.create({title,description,image,price,location,country})
        .then(result=>{
            console.log(result);
            res.redirect("/");
        }
        );

    }catch(err){
        console.log(err);
    }

}
module.exports =addPlaceController;