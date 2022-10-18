const mongoose = require("mongoose")

//Using unique: true will ensure username and emails are unique/different from all other usernames and emails
    //Helps with avoiding duplicates

const UserSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}

},
{timestamps: {createdAt: "created_at"}})


module.exports = mongoose.model("User", UserSchema)