const cors=require("cors")

const mongoose=require("mongoose")
const dotenv=require("dotenv")
const express=require("express")
const authRoutes=require("./routes/auth")
const postRoutes=require("./routes/post")
const mpesaRoutes=require("./routes/mpesaRoutes")
const app=express()

const PORT=process.env.PORT || 5000
dotenv.config()
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("Database is Working")
})
.catch((err)=>{
console.log(err)
})

const corsOption={
    origin:"*",
}
app.use(express.json());
app.use(cors())
app.use("/api",mpesaRoutes)
app.use("/api/auth",authRoutes)
app.use("/api/post",postRoutes)
app.listen(PORT,()=>{
console.log(`server running at ${PORT}`)
})




