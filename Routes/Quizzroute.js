const express=require("express");
const {Quizzmodel}=require("../models/Quizzmodel");

const Quizzroute=express.Router();

Quizzroute.post("/",async(req,res)=>{
    try {
      console.log(req.body,1);
        const quizz=new Quizzmodel(req.body);
        await quizz.save();        
        res.send({"msg":"new quizz added"});
    } catch (error) {
      res.send({"msg":error.message});  
    }
});

Quizzroute.get("/all",async(req,res)=>{
 
      try {
        
          console.log(req.body,3);
          const quizzes=await Quizzmodel.find();
     
          res.send(quizzes);
        
        
          
      } catch (error) {
        res.send({"msg":error.message});  
      }
  });

  Quizzroute.get("/active",async(req,res)=>{
 
    try {
      
        const currentDate = new Date();
        const quizzes=await Quizzmodel.find({
            $and: [
              {start_date:{$lte: currentDate}},
              {End_date:{$gte: currentDate} }
            ]
          });
   
        res.send(quizzes);
      
      
        
    } catch (error) {
      res.send({"msg":error.message});  
    }
});

Quizzroute.get("/:id/result",async(req,res)=>{
 
    try {
      
        const {id}=req.params;
    console.log(id);
    let quizz=await Quizzmodel.findOne({_id:id});
    let enddate = quizz.End_date;
    enddate.setTime(enddate.getTime() + 5 * 60 * 1000);
    let currentdate=new Date();

    if(currentdate>enddate)
    {
        res.send(quizz);
    }else{
        let day = enddate.toLocaleString('en-US', { weekday: 'long' });
let date = enddate.toLocaleDateString('en-US');
let time = enddate.toLocaleTimeString('en-US', { hour12: true });

        res.send({"msg":`try at or after ${day} ,${date} ,${time}` });
    }
      
      
        
    } catch (error) {
      res.send({"msg":error.message});  
    }
});



module.exports={Quizzroute};