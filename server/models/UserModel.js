const mongoose = require('mongoose');
const validator = require('validator');
const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength:[4,"Name Cannot be less than 4 characters"],
        maxLength:[20,"Name Cannot be more than 20 characters"],
        trim:true
    },
    lastName: {
        type: String,
        minLength:[4,"Name Cannot be less than 4 characters"],
        maxLength:[20,"Name Cannot be more than 20 characters"],
        trim:true
    },
    phone:{
         type:String,
         required:true,
         unique:true,
         index:true,
         validate:(val)=>{
            if(!validator.isMobilePhone(val,'en-IN')){
                throw new Error('Invalid Phone Number')
            }
         }
    },
    email: {
        type: String,
        unique:true,
        validate:(val)=>{
            if(!validator.isEmail(val)){
                throw new Error('Invalid Email');
        }
    }
    }
})

 const UserModel = mongoose.model("User",UserSchema);
 module.exports = {UserModel};