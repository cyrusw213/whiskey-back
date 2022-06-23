// DEPENDENCIES /////////////////////////////////////////
////////////////////////////////////////////////////////
const express = require('express');
const app = express(); 
const whiskeyController = require('./controllers/whiskeys')
const admin = require('firebase-admin'); 

// CONFIGURE APP SETTINGS ////////////////////
require('dotenv').config();

// const serviceAccount = require('./firebase-service-key.json');

// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount)
// }); 

const { PORT, MONGODB_URI } = process.env; 

// IMPORT SEED DATA JSON FILE
const whiskeyData = require('./whiskeyData');

// IMPORT WHISKEY SCHEMA
const Whiskey = require('./models/whiskeySchema')

// MIDDLEWARE DEPENDENCIES /////////////////////////////
///////////////////////////////////////////////////////
const cors = require('cors'); 
const morgan = require('morgan'); 

// MONGOOSE CONNECTION TO DATABASE////////////////////
/////////////////////////////////////////////////////
const mongoose = require('mongoose');
mongoose.connect(MONGODB_URI);  

// Connection Events ///////////////////////////////
mongoose.connection
    .on("connected", () => console.log("You are connected to mongoose"))
    .on("disconnected", () => console.log("You are disconnected from mongoose"))
    .on("error", (error) => console.log("Error with MongoDB: " + error.message));
//////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

// ////////////////////////////////
// MIDDLEWARE
app.use(cors()); // Access-Control-Allow
app.use(morgan('dev'));
app.use(express.json());//this creates req.body
app.use(whiskeyController)

// AUTHORIZATION MIDDLEWARE ////////////////
// creates user and authenticates user token
// app.use(async (req, res, next) => {
//     const token = req.get('Authorization');
//     if (token) {
//         console.log(token); 
//         const user = await admin.auth().verifyIdToken(token.replace('Bearer ', ""));
//         req.user = user; 
//     } else {
//         req.user = null;
//     }
//     next();
// });
// // check if req.user exists (is user authenticated?)
// function isAuthenticated(req, res, next) {
//     if (!req.user) {
//         return res.status(401).json({ message: 'you must be logged in to save favorite'}); 
//     } else {
//         return next();
//     };
// }; 


app.listen(PORT, () => console.log(`I love you ${PORT}`)); 