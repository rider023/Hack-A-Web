import mongoose from 'mongoose' ; 

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
    gender: {
        type: String,
        enum: ["male", "female","other"],
    },
    age:{
        type:Number,
    },
    contact:{
        type:String, 
    }
})

export default User = mongoose.model("user",userSchema) ; 