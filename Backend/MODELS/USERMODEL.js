//create user schema with validations
import {Schema,model} from 'mongoose';
// create user model for user schema
const userschema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:[true,"Email already exists"]
    },
    dateofBirth:{
        type:Date,
        required:[true,"Date of Birth is required"]
    },
    mobileNumber:{
        type:Number,

    },
    status:{
        type:Boolean,
        default:true
    }
    
},
{
    timestamps:true,
    versionKey:false,
    strict:"throw"
})

export const usermodel = model("user",userschema)