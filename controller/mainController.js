const productHelper = require('./helpers/index')
const allproducts = async (req,res)=>
{
    const producRes = await productHelper.allproducts
    res.render('index',{producRes})
}
const loginregister = (req,res)=>{
    res.render('loginregister')
}
module.exports = {allproducts:allproducts,loginregister:loginregister};