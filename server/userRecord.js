const { Db } = require("mongodb");
const mongoose = require("mongoose")
const UserDetalsSchema = new mongoose.Schema(
    {
        fname: String,
        lname: String,
        email: String,
        password: String,
    },
    {
        collection: "UserInfo",
    }
);

mongoose.model("UserInfo", UserDetalsSchema);
