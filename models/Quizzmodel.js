const mongoose=require("mongoose");

const Quizzschema=mongoose.Schema({
   question:String,
   options:Array,
   answer:Number,
   start_date:Date,
   End_date:Date
});

const Quizzmodel=mongoose.model("quizz",Quizzschema);

module.exports={Quizzmodel};