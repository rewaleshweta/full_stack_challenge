const Product = require("../model/ProductModel")

const PostProduct = async( req, res)=>{
  try {
     const data = new Product(req.body);
     const createdData = await data.save();
     res.status(201).json({status:"success" , data:createdData})
  } catch (error) {
    res.status(400).json({status:"fail" , message:error.message})
  }
}

const getProduct = async(req, res)=>{
  try {
    const data = await Product.find();
    res.status(200).json({status:"success" , data:data})
  } catch (error) {
    res.status(400).json({status:"fail" , message:error.message})
  }
}


const searchfunction =  async(req, res)=>{
  try{
     let serachTitle = await  Product.find({name:new RegExp(req.query.search, "i")});//10[{},{}]
      if(serachTitle.length){//10 //
              res.status(200).json({result:serachTitle}); 
      }else{
          res.status(400).send("no such result found");  
      }
  }catch(err){
      res.status(404).send(err);
  }
}

module.exports = {
    PostProduct,
    getProduct,
    searchfunction
}