const express = require('express')
const router = express();
const path = require('path')
const userController = require('../controller/user')

router.get('/',userController.userspage)
router.post('/',userController.adduser)
router.post('/search',userController.SearchRes)
router.get('/del/:DeleteParam',userController.Delete)
router.get('/login2',(req,res)=>{
    res.render('login2')
})
router.post('/login2',userController.SearchCredentials)
module.exports = router;