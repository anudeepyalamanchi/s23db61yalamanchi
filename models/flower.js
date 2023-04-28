const mongoose = require("mongoose")

// function validator (v) {
//     return v.length > 5;
//   };


const flowerSchema = mongoose.Schema({
    flower_name: {
        type: String,
        minlength: [5, 'flower name Should have minimum length of 5'],
        maxlength: [15, 'flower name Should have maximum length of 15']
    },
    flower_color: String,
    flower_cost: {
        type: Number,
        min:3,
        max:10
    }
})

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connectionerror:'));
db.once("open", function () {
    console.log("Connection to DB succeeded")
});


module.exports = mongoose.model("flower", flowerSchema)

