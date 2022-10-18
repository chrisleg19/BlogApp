const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema({
    title: {type: String, required: true},
    body: {type: String, required: true},
    author: {type: String, required: true},
    likes: {type: Number, default: 0},
    sponsored: {type: Boolean, default: false},
    authorImage:{type: String}
},
{ timestamps: { createdAt: 'created_at' } })
// { timestamps: true} - can also be used (default returns date)


//module.exports = mongoose.model("name of file", "name of schema")
module.exports = mongoose.model("Blog", blogSchema)