const mongoose = require('mongoose')

const connection_string = process.env.CONNECTION_STRING

mongoose.connect(connection_string).then((res) => {
    console.log("MongoDB Atlas connected with bServer !!");
}).catch((err) => {
    console.log("connection failed");
    console.log(err);
})