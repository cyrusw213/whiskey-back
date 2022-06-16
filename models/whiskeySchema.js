const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

const whiskeySchema = new Schema(
    {
        "Photo": String,
        "Price": Number,
        "Brand": String, 
        "Country": String,
        "Rating": {type: Number, default: 3}
    }
);


const Whiskey = mongoose.model('Whiskey', whiskeySchema); 

module.exports = Whiskey; 