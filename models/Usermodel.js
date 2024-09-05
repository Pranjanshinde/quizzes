const mongoose=require("mongoose");

const Userschema=mongoose.Schema({
    name:String,
    email:String,
    password:String
});

const UserModel=mongoose.model("user",Userschema);

module.exports={UserModel};