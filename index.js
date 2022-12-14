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
    console.log("Sharon Database is Working")
})
.catch((err)=>{
console.log(err)
})



const corsOptions = {
    origin:"http://localhost:3000",
    credentials: true,
    methods: ['GET','POST','HEAD','PUT','PATCH','DELETE'],
    allowedHeaders: ['Content-Type'],
    exposedHeaders: ['Content-Type']
}

app.use(express.json());
app.use(cors(corsOptions))
app.use("/api",mpesaRoutes)
app.use("/api/auth",authRoutes)
app.use("/api/post",postRoutes)

app.listen(PORT,()=>{
console.log(`server running at ${PORT}`)
})




