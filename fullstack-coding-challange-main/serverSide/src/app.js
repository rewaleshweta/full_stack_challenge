const express = require('express');
const app = express();
const env = require("dotenv").config();
const PORT = process.env.PORT ;
require("./DB/connection")
const router = require("./router/ProductRouter")
const UserRouter = require("./router/UserRouter")
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use("/product", router)
app.use("/user" , UserRouter)

app.listen(PORT,()=>{
    console.log(`listening the port ${PORT}`)
})