const express = require('express')
const user = require('./models/user')
app = express();
const productHelper = require('./controller/helpers/index')
const jwt = require("jsonwebtoken")
const path = require('path');
const mongoose = require('mongoose');
const product = require('./models/product')
const loginController = require('./controller/login')
const productsRoute = require('./routes/product')
const cors = require('cors')
const tokenController = require('./controller/helpers/tokenauthenticate')
const database = require('./db')
const mainRoute = require('./routes/main');
const { send, nextTick } = require('process');
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.post('/loginregister',loginController.LoginSearch)
app.get('/login1',(req,res)=>{
    const accessToken = (req,res)=>{
        const username = req.body.Username 
        const user = {name:username}
    const accessToken  = jwt.sign(user,process.env.secretkey)
        res.json({accessToken:accessToken})   
    }
    res.render('login1')
}) // Pending Tutorial https://www.youtube.com/watch?v=mbsmsi7l3r4
// Register view engnie
app.set('view engine', 'ejs')
// Routes Post Middleware
app.use('/', mainRoute)
app.use('/products', productsRoute)
app.use('/user', require('./routes/user'))
app.use('/views',express.static(path.join(__dirname,"public")))
app.listen(3000);


