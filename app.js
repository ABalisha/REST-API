const express = require('express')
const user = require('./models/user')
app = express();
const path = require('path');
const mongoose = require('mongoose');
const product = require('./models/product')
const productsRoute = require('./routes/product')
const cors = require('cors')
const database = require('./db')
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/', (req,res)=>{
    res.send("This is the home page");
})
// Register view engnie

app.set('view engine', 'ejs')
app.use('/public', express.static(path.join(__dirname,'static')))
// Routes Post Middleware
app.use('/',express.static(path.join(__dirname,'products')))
app.use('/products', productsRoute)
app.use('/remove', productsRoute)
app.listen(3000);