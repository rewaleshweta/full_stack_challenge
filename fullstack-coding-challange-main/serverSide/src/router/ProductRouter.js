const express =require("express");
const Router = express.Router();
const {PostProduct,getProduct ,searchfunction} =  require("../controller/controllerProduct")


Router
.route('/')
.post(PostProduct)
.get(getProduct)

Router
.route("/find")
.get(searchfunction)

module.exports= Router;