const product = require('../../models/product')
const user = require('../../models/user')
const allproducts1 = async(req,res)=>
{
await product.find()
.then(resu =>
{
res.send(resu);
})
.catch(error=>
{
res.send(error)
})
}

const allusers = async(req,res)=>{
await user.find()
  .then(data=>{
      return data
  })
  .catch(err =>{
      return err
  })
}
module.exports = {allproducts1,allusers};