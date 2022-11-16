const router=require("express").Router();
const Bid=require("../model/bid");

// post amount
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

// get amount

router.get("/amount", async(req,res)=>{
    try{ 
        const bid=await Bid.find()
        res.status(200).json(bid)
    }
    catch(err){
        res.status(404).json(err)

    }
})


module.exports=router;