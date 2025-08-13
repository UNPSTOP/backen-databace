const express = require("express");
const app = express();
const cors = require('cors');
const dotenv = require("dotenv").config();
const connectDB = require("./config/DB");
// const apiAuth = require('./middlerware/protection');

const product = require("./routs/productrouter");
const port = 4000;
connectDB();
const allowedOrigin = "https://my-gym-beryl.vercel.app/"; // <-- your real frontend URL

app.use(cors({
    origin: function(origin, callback) {
        if (!origin || origin === allowedOrigin) {
            callback(null, true); // allow request
        } else {
            callback(new Error("Not allowed by CORS")); // block request
        }
    }
}));
app.use(express.json());
app.use('/api/product', product);
app.listen(port, () => console.log(`Example app listening on port localhost ${port}!`));