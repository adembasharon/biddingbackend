const mongoose=require("mongoose")
const bidSchema=mongoose.Schema({
    amount:{type:Number,required:true }

})
module.exports=mongoose.model("Bid",bidSchema) 