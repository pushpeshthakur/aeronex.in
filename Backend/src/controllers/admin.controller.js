const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const adminModel = require('../models/admin.model');
const quoteModel = require('../models/quote.model');

async function loginAdmin( req, res ) {
    try{
        const { email, password } = req.body;

        if(!email || !password){
            return res.status(400).json({
                message: "Email and password is required!"
            })
        }

        const admin = await adminModel.findOne({
            email: email
        })
        if(!admin){
            return res.status(401).json({
                message: "Invalid email or password."
            })
        }

        const isValidPassword = await bcrypt.compare(password, admin.password);

        if(!isValidPassword){
            return res.status(401).json({
                message: "Invalid email or password."
            })
        }

        const token = jwt.sign({
            id: admin._id,
            email: admin.email,
        },process.env.JWT_SECRET)

        // res.cookie("token", token);
        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            maxAge: 24 * 60 * 60 * 1000
        });

        res.status(201).json({
            message: "Admin login sucessfully",
            email
        })

    } catch (error) {
        console.error("Admin login failed:", error)

        res.status(400).json({
            mssage: "Admin login failed."
        })
    }
}

async function getAllQuotes(req, res) {
    try {

        const quotes = await quoteModel
            .find()
            .sort({ _id: -1 });

        res.status(200).json({
            message: "Quotes fetched successfully",
            quotes
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Failed to fetch quotes(getApi)"
        });
    }
}

async function logoutAdmin(req, res) {
    try{
        res.clearCookie("token", {
            httpOnly: true,
            secure: true,
            sameSite: "none"
        });

        return res.status(200).json({
            message: "Admin logged out successfully."
        })
    } catch (error) {
        console.error(error)

        return res.status(500).json({
            message: "Logout failed."
        })
    }
}

module.exports = { loginAdmin, getAllQuotes, logoutAdmin }
