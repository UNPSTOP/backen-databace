const express = require("express");
const app = express();
const cors = require('cors');
const dotenv = require("dotenv").config();
const connectDB = require("./config/DB");
// const apiAuth = require('./middlerware/protection');

const product = require("./routs/productrouter");
const port = 4000;
connectDB();
app.use(cors({
    origin: [
        "https://my-gym-beryl.vercel.app",
        "https://my-gym-beryl.vercel.app/register",
        "https://my-gym-beryl.vercel.app/login",
        "https://my-gym-beryl.vercel.app/Newpassord",
        "http://localhost:5173/"
        // "https://my-gym-beryl.vercel.app/Newpassord"

    ],

    methods: ["GET", "POST", "PUT"],
    credentials: true
}));

app.use(express.json());
app.use('/api/product', product);
app.listen(port, () => console.log(`Example app listening on port localhost ${port}!`));