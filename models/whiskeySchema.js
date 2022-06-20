const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

const whiskeySchema = new Schema(
    {
        "Name": String,
        "Categories": String,
        "Photo": String,
        "Price": Number,
        "Brand": String, 
        "Country": String,
        "Rating": {type: Number, default: 0}
    }
);


const Whiskey = mongoose.model('Whiskey', whiskeySchema); 

module.exports = Whiskey; 