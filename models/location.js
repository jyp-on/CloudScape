const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const LocationSchema = new Schema({
    one: {
        type : String,
        required : false
    },
    two: {
        type : String,
        required : false
    },
    three: {
        type : String,
        required : false
    },
    four: {
        type : String,
        required : false
    },
    latitude : {
        type: Number,
        required : false
    },
    longitude : {
        type: Number,
        required : false
    }
})
 
const Location = mongoose.model('location', LocationSchema);

module.exports = Location;