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

app.get("/api", (req,res) => {
    res.json({"users": ["userOne", "userTwo", "userThree"]})
});

app.listen(port, () => {
    dbo.connectToServer(function (err) {
        if (err) console.error(err);
     
      });
    console.log("Server started on port 5000");
});
