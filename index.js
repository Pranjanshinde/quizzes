const express=require("express");
var cors = require('cors');
const { connection } = require("./db");
const { Quizzroute } = require("./Routes/Quizzroute");
const { UserRouter } = require("./Routes/Userroute");
const { Auth } = require("./Middleware/Auth");

const app=express();

app.use(express.json());
app.use(cors());


app.get("/",(req,res)=>{
    res.send("Home page");
});

app.use("/user",UserRouter);

app.use(Auth);

app.use("/quizzes",Quizzroute);


app.listen(8080,async(req,res)=>{
    try {
        console.log("connecting...");
        await connection;
        console.log("connected");
    } catch (error) {
        res.send({"msg":error.message});
    }
});



