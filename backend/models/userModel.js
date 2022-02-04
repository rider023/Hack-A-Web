import mongoose, { trusted } from 'mongoose' ; 

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    hash_password:{
        type:String,
        required:true,
    },
    full_name:{
        type:String
    },
})