const jwt=require("jsonwebtoken")
const verification=(req,res,next)=>{
    console.log(req.headers)
const authHeader=req.headers.token
if(authHeader){
    const token = authHeader.split(' ')[1]
    jwt.verify(token,process.env.JWT_SEC,(err,user)=>{
        err ? res.status(403).json("Token is not Valid"):req.user=user;
        next()
    })
}else{
    res.status(401).json("User not Authenticated")
}
}
const verificationAndAutherization=(req,res,next)=>{
    verification(req,res,()=>{
        if(req.user.id==req.params.id || req.user.isAdmin){
            next()
        }else{
            res.status(500).json("You cannot acces this task")
        }
    })
}

const verifyTokenAndAdmin=(req,res,next)=>{
    verification(req,res,()=>{
        if(req.user.isAdmin){
            next()
        }else{
            res.status(500).json("cannot do this")
        }
    })
}

module.exports={verifyTokenAndAdmin , verificationAndAutherization}