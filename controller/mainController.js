const product = require('../models/product')
const allproducts = async (req,res)=>
{
    const producRes = await product.find()
    .then(data=>{
        return data
    })
    .catch(error=>{
        return error 
    })
    console.log(producRes)
    res.render('index',{producRes})
}
const loginregister = (req,res)=>{
    res.render('loginregister')
}
module.exports = {allproducts:allproducts,loginregister:loginregister};