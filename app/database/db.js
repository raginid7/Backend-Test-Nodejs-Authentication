require('dotenv').config()
const mongoose = require('mongoose');
exports.connectMonggose =()=>{
    mongoose.connect('mongodb+srv://raginidhole45:<password>@cluster0.pnlygkl.mongodb.net/?retryWrites=true&w=majority/',
    {
        useNewUrlParser: true
    })
    .then((e)=>console.log("Connected to Mongodb =>> Nodejs Authentication"))
    .catch((e)=>console.log("Not Connect Mongodb"))
}
