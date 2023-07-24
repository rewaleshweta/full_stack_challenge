const express =require("express");
const UserRouter = express.Router();
const {userRegisterCtrl,loginUserCtrl} =  require("../controller/ControllerUser")


UserRouter
.route('/signup')
.post(userRegisterCtrl)

UserRouter
.route('/login')
.post(loginUserCtrl)


module.exports= UserRouter;