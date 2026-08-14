const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const quoteRoute = require('./routes/quote.routes')
const adminRoute = require('./routes/admin.routes')



const app = express();
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// Api for create quote
app.use('/api/quote', quoteRoute);

// Api for admin login
app.use('/api/admin', adminRoute);

// Api for getAllQuotes to admindashboard
// app.use('/api/admin', adminRoute);



module.exports = app;