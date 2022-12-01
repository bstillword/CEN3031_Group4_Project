const { Db } = require("mongodb");
const mongoose = require("mongoose")
const UserDetalsSchema = new mongoose.Schema(
    {
        fname: String,
        lname: String,
        email: {type: String, unique: true},
        password: String,
    },
    {
        collection: "UserInfo",
    }
);

mongoose.model("UserInfo", UserDetalsSchema);
