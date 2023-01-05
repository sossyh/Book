const express=require("express");
const userRouter=express.Router();
const userController=require("../controller/user")
// userRouter.get()


userRouter.post("/login",userController.login);
userRouter.post("/signup",userController.signup);

userRouter.post("/signin",(req,res,next)=>{
    console.log(console.log(req.params))
    res.send(req.params.id);}
)




module.exports=userRouter