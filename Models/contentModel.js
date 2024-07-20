const mongoose = require('mongoose')

const contentSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    contentImg:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        required:true
    }
})

const contents = mongoose.model("contents",contentSchema)

module.exports = contents