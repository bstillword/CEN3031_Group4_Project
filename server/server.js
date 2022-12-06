const puppeteer = require('puppeteer');
const express = require('express');
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
const http = require("http").Server(app);
const scraperController = require('./webController');

app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));

// get driver connection
const dbo = require("./db/conn");

const mongoose = require('mongoose');

const jwt = require("jsonwebtoken");

const JWT_SECRET = "C4B823EC3C03B6D54E6C64C1B62F1F1EB417978D0538216C5D1B33A88A3F04B1"

const mongoUrl = "mongodb+srv://test:Easy@cluster0.rnf27gj.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
}).then(() => {
    console.log("Connected to db through mongoose");
}).catch((e) => console.log(e));

app.get("/api", (req,res) => {
    res.json({"users": ["userOne", "userTwo", "userThree"]})
});


app.post("/webController", async (req,res) => {
    try{
        let colors = await scraperController(req.body.topic)
        console.log(colors)
        return res.send(colors)
    }
    catch (error){
        res.send({status: "error"});
    }
});

require("./userRecord")

const User=mongoose.model("UserInfo");

app.post("/register", async(req, res) =>{
    const {fname,lname,email, password, following, followers, likes}= req.body;
    try{
        const oldUser = await User.findOne({ email})
        if(oldUser)
            return res.send({error: "User Exists"})
        await User.create({
            fname,
            lname,
            email,
            password,
            following,
            followers,
            likes

        });
        res.send({stats: "ok"});
    } catch (error){
        res.send({status: "error"});
    }
})

app.post("/login", async (req, res) => {
    const {email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user){
        return res.json({error: "User not found"});
    }
    if(await (password == user.password)){
        const token = jwt.sign({}, JWT_SECRET);
    
        if(res.status(201)){
            return res.json({status: "ok", data: token})
        } else {
            return res.json({error: "error"});
        }
    }
    res.json({status:"error", error: "Invalid password"});

    

});

app.post("/userData", async(req,res) =>{
    const {token}=req.body;
    try{
        const user = jwt.verify(token, JWT_SECRET);
        const useremail = user.email;
        User.findOne({user: useremail})
        .then((data) =>{
            res.send({status: "ok", data: data});
        }).catch((error)=>{
            res.send({status: "error", data: error})
        });
    } catch(error){

    }
})
app.listen(port, () => {
    dbo.connectToServer(function (err) {
        if (err) console.error(err);
     
      });
    console.log("Server started on port 5000");
});
