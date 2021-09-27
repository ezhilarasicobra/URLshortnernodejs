const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
    try{
        await mongoose.connect(db, {
            useNewURLParser: true,
            useUnifiedTopology:true,
            writeConcern: {
                j: true
            }
        });
        console.log("Connected to DB");
    }catch(err){
        console.error(err.message);
    }
}

module.exports = connectDB;