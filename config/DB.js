const mongoose = require("mongoose")
const dotenv = require('dotenv').config({ path: './config/.env' });

const connectDB = async() => {
    try {
        console.log("MONGO_URI from env:", process.env.MONGO_URI);

        const conne = await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Connected:');
    } catch (e) {
        console.log(e);

    }

}
module.exports = connectDB