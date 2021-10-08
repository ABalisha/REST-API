const product = require('../../models/product')
const function123 = () => {
product.find()
.then(resu =>
{
res.send(resu);
})
.catch(error=>
{
res.send(error)
})
}

module.exports = {function123}