const mongoose = require('mongoose')
const validator = require('validator')
const {Schema} = mongoose;


const userSchema = new Schema({
    firstname : {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: [true, 'email address is required'],
    },
    password : {
        type: String,
        required: true
    },
    plot: {
        type: String
    },
    landmark:{
        type: String
    },
    street: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    zipcode: {
        type: Number
    }
})



const User = mongoose.model("user", userSchema);
module.exports = User;