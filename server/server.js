const express = require('express');
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));
// get driver connection
const dbo = require("./db/conn");

const mongoose = require('mongoose')

const mongoUrl = "mongodb+srv://test:Easy@cluster0.rnf27gj.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
}).then(() => {
    console.log("Connected to db through mongoose");
}).catch((e) => console.log(e));

app.get("/api", (req,res) => {
    res.json({"users": ["userOne", "userTwo", "userThree"]})
});

require("./userRecord")

const User=mongoose.model("UserInfo");

app.post("/register", async(req, res) =>{
    const {fname,lname,email, password}= req.body;
    try{
        await User.create({
            fname,
            lname,
            email,
            password,
        });
        res.send({stats: "ok"});
    } catch (error){
        res.send({status: "error"});
    }
})

app.listen(port, () => {
    dbo.connectToServer(function (err) {
        if (err) console.error(err);
     
      });
    console.log("Server started on port 5000");
});
