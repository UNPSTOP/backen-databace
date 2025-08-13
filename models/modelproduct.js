const {
    Schema,
    model
} = require("mongoose");
// const mongoose = require("mongoose");

const productSchema = new Schema({
    name: {
        type: String,
        required: true

    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true

    },
    payment_status: {
        type: Boolean,
        required: true
    },
    payment_id: {
        type: String,
        required: true
    },

    payment_amount: {
        type: Number,
        required: true
    },
    day: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },

});

module.exports = model("product", productSchema);