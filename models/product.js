const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        length:20,  

    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: [0, "Price cannot be negative"],
        max: [1000, "Price cannot be greater than 1000"] 
    }
})

module.exports = mongoose.model("Product", productSchema)
