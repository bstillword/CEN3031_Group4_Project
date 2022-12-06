const { Db } = require("mongodb");
const mongoose = require("mongoose")
const UserDetalsSchema = new mongoose.Schema(
    {
        fname: String,
        lname: String,
        email: {type: String, unique: true},
        password: String,
        following: [{type: String, unique: true}],
        followers: [{type: String, unique: true}],
        likes: [{type: String, unique: true}]
    },
    {
        collection: "UserInfo",
    }
);

mongoose.model("UserInfo", UserDetalsSchema);
