const express=require("express");
// used only for developers not for production
const userRouter=require("./routes/user");
// 
const dotenv=require("dotenv");
dotenv.config('../.env');

const morgan=require("morgan");

const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/bootcamp",()=>{
    console.log("connected to db");
})
const app=express();
const PORT = process.env.PORT; 

app.use(morgan("dev"));
app.use(express.json());
// app.use("/api/v1/books",)
app.use("/api/v1/users",userRouter);

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
});