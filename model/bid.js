const mongoose=require("mongoose")
const bidSchema=mongoose.Schema({
    amount:{type:String,required:true }

})
module.exports=mongoose.model("Bid",bidSchema) 