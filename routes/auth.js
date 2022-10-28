const router=require("express").Router();
 const Auth=require("../model/auth")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")

// register

 router.post("/register",async (req,res)=>{
     const salt=await bcrypt.genSalt()
    const newUser=new Auth({
      username:req.body.username,
      email:req.body.email,
      password:await bcrypt.hash(req.body.password,salt)
  })

  try{
    const savedUser=await newUser.save()
    res.status(201).json(savedUser)
    }
    catch(err){
    res.status(404).json(err)
    }
    

   })

// login
router.post("/login",async (req,res)=>{
    try{
      const user=await Auth.findOne({username:req.body.username})
      if(!user){
        return res.status(404).json("user not found")
      }
    
  
      const comparePassword=await bcrypt.compare(req.body.password,user.password)
      if(!comparePassword){
        return res.status(404).json("Password does not match")
      }
      
  
      
      const {password,...others}=user._doc
      
      const accessToken=jwt.sign({
        id:user._id
       
            }, process.env.JWT_SEC)
            console.log(accessToken)
      return res.status(200).json({...others,accessToken});
  
      }
      catch(err){
      res.status(404).json(err)
      }
  })
    






module.exports=router


