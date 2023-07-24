const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.DB_URL + process.env.Data_Base)
    .then(() => console.log('connected to database'))
    .catch(() => console.log("connection error"))


   