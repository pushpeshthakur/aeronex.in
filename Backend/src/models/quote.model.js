const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
    fullName:{
        type: String,
        required: true,
    },
    companyName:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    phoneNumber:{
        type :String,
        required: true,
    },
    city:{
        type: String,
        required: true,
    },
    reason: {
        type: String,
        required: true,
    },
    pincode: {
        type: String,
        required: true,
    },
    message: {
        type: String
    }
})

const quoteModel = mongoose.model("quote", quoteSchema);

module.exports = quoteModel;