const quoteModel = require('../models/quote.model');

async function createQuote(req, res){
    try{

    const { 
        fullName, 
        companyName, 
        email, 
        phoneNumber, 
        city, 
        reason,
        pincode, 
        message
        } = req.body;

    const name = fullName
    if(!name){
        return res.status(409).json({
            message: "Invalid"
        })
    }

    const quote = await quoteModel.create({
        fullName,
        companyName,
        email,
        phoneNumber,
        city,
        reason,
        pincode,
        message
    });

    res.status(201).json({
        message: "Quote created sucessfully",
        quote:{
            id: quote._id,
            fullName: quote.fullName,
            companyName: quote.companyName,
            email: quote.email,
            phoneNumber: quote.phoneNumber,
            city: quote.city,
            reason: quote.reason,
            pincode: quote.pincode,
            message: quote.message,
        }
    });

    } catch (error) {
        console.error("create quote error", error)

        res.status(400).json({ message: "Failed "})
    }
    
}



module.exports = { createQuote };