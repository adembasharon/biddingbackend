const mongoose=require("mongoose")
const UserSchema=mongoose.Schema({
    username:{type:String,unique:true,required:true },
    email:{type:String,unique:true,required:true},
    password:{type:String,required:true},
    phone:{type:Number,required:true}


},{
timestamps:true
})
module.exports=mongoose.model("Auth",UserSchema) 
 