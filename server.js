require('dotenv').config();
// DEPENDENCIES /////////////////////////////////////////
////////////////////////////////////////////////////////
const express = require('express');
const app = express(); 

const { PORT, MONGODB_URI } = process.env; 


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

// ////////////////////////////
// ROUTES
// Test Route 
app.get("/", (req, res) => {
    res.send("Hello World")
}); 





app.listen(PORT, () => console.log(`I love you ${PORT}`)); 