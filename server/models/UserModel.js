const mongoose = require('mongoose');
const validator = require('validator');
const {Order} = require('./OrderModel');
const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
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
    },
    orders:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Order"
    }
    ],
    cart:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"ProductOrder"
    }]
})

 const UserModel = mongoose.model("User",UserSchema);
 module.exports = {UserModel};