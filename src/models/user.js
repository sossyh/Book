const mongoose=require("mongoose");
const schema= new mongoose.Schema({
    firstname:{
        type:String
    },
    lastname:{
        type: String
    },
    email:{
        type: String
    },
    password:{
        type:String,
        select:false//not to sent the password to the front end
    }
},{
    timestamps:true,
})

const User=mongoose.model("User",schema);
module.exports=User;

