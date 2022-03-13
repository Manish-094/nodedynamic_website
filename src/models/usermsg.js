const mongoose = require("mongoose");
const validator = require("validator");
//creating a schema
const usermsgSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    email:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid email id")
            }
        }
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true,
        min:10
    },
    message:{
        type:String,
        required:true
    }
})
// creating collection
const Userdata = new mongoose.model("Userdata",usermsgSchema);
module.exports = Userdata;