const mongoose=require("mongoose")
const postSchema=mongoose.Schema({
name:{type:String,required:true },
image:{type:String,required:true },
description:{type:String,required:true },
cartegory:{type:String,required:true },
properties:{type:String},
subimages:{type:Array,required:true},
currentdate:{type:String,required:true},
endingdate:{type:String,required:true},
startingPrice:{type:Number,required:true},
},
{timestamps:true})


module.exports=mongoose.model("Post",postSchema) 