const mongoose=require("mongoose");
const connection=mongoose.connect(`mongodb+srv://pranjanshinde:pranjanshinde@cluster0.q8f2diw.mongodb.net/guru2?retryWrites=true&w=majority&appName=Cluster0`);

module.exports={connection};