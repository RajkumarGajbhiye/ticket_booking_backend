const mongoose = require('mongoose');



const bookingSchema=new mongoose.Schema({
    movie_name:String,
    date:String,
    time:String,
    seats:{
        type:Array,
        default:[]
    }
})


const bookingModel= new mongoose.model('booking',bookingSchema);

module.exports = bookingModel;