// DEPENDENCIES /////////////////////////////////////////
////////////////////////////////////////////////////////
const express = require('express');
const app = express(); 
require('dotenv').config();
const whiskeyController = require('./controllers/whiskeys')

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


app.listen(PORT, () => console.log(`I love you ${PORT}`)); 