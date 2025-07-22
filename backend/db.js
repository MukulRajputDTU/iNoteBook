const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/iNotes";

const connectToMongo = async ()=>{
    try {
        await mongoose.connect(mongoURI);
        console.log("Connected to mongoDb.");
    }catch (err) {
        console.error(err);
    }
}

module.exports = connectToMongo;