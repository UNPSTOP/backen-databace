const express = require("express");
const app = express();
const cors = require('cors');
const dotenv = require("dotenv").config();
const connectDB = require("./config/DB");
// const apiAuth = require('./middlerware/protection');

const product = require("./routs/productrouter");
const port = 4000;
connectDB();

app.use(cors());

app.use(express.json());
app.use('/api/product', product);
app.listen(port, () => console.log(`Example app listening on port localhost ${port}!`));