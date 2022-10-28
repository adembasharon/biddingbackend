const router=require("express").Router();
 const Post=require("../model/post");
// const { verifyTokeAndAdmin,verifyTokenAndAuthorization } = require("./verification");

 router.post("/new", async(req,res)=>{
const newPost=new Post({
image:req.body.image,
description:req.body.description,
properties:req.body.properties,
cartegory:req.body.cartegory,
name:req.body.name,
subimages:req.body.subimages,
currentdate:req.body.currentdate,
endingdate:req.body.endingdate,
startingPrice:req.body.startingPrice


})
console.log(newPost)
try{
    const savedPost=await newPost.save()
    console.log(newPost)
    res.status(201).json(savedPost)
}
catch(err){
res.status(404).json(err)
} })

//  update Post
router.put("/:id", async (req,res)=>{
    try{
        const id=req.params.id
        const updates=req.body
        const options={new:true}
        const updatedPost= await Post.findByIdAndUpdate(id,updates,options)
        res.status(200).json(updatedPost)
    }
    catch(err){
        res.status(500).json(err)
    }
    })

    // delete post
router.delete("/:id",async(req,res)=>{
    try{
        res.status(200).json("post deleted")
    return await Post.findByIdAndDelete(req.params.id)
    
    }
    catch(err){
    res.status(404).json("post not Found")
    }})
    

// find post by id

router.get("/find/:id", async(req,res)=>{


    try{ 
        

        const post=await Post.findById(req.params.id)
        const {password,...others}=post._doc
        res.status(200).json(others)
    }
    catch(err){
        res.status(404).json(err)

    }
})


// FIND ALL
router.get("/", async(req,res)=>{


    try{ 
        const post=await Post.find()
        res.status(200).json(post)
    }
    catch(err){
        res.status(404).json(err)

    }
})







 module.exports=router;