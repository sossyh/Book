const mongoose=require("mongoose");//con
const schema=new mongoose.Schema({
   name:{
    type: String,
   } ,
   description:{
    type: String
   },
   img:{
    type:String,
    default:"default.png",

   },
   creator:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
   },
   authors:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
   }],
   content: {
    type: String,
    defaultValue: ""
}
},
{
    timestamps:true,// to create a timestamp whenever the (created at, and updated at)
}
);

const Book=mongoose.model("Book",schema);
module.exports=Book;
