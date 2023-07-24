const mongoose = require('mongoose');

const USerSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true 
    },
    password:{
        type:String,
        require:true
    }
})

const User = new mongoose.model("User" , USerSchema);
module.exports = User;