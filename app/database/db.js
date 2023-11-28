require('dotenv').config()
const mongoose = require('mongoose');
exports.connectMonggose =()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/',
    {
        useNewUrlParser: true
    })
    .then((e)=>console.log("Connected to Mongodb =>> Nodejs Authentication"))
    .catch((e)=>console.log("Not Connect Mongodb"))
}
