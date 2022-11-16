const router=require("express").Router();
const Bid=require("../model/bid");

router.post("/new", async(req,res)=>{
const newBid=new Bid({
    amount:req.body.amount
})
try {
    const savedBid=await newBid.save()
    console.log(newBid)
    res.status(201).json(savedBid)
    
} catch (err) {
    console.log(err)
}
})
module.exports=router;