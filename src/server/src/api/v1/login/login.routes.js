const express = require('express')
const loginController =require('./login.controller')

const router =express.Router();

router.post('/login',function(req,res){
    loginController.login(req,res)
})

router.post('/createAdmin',function(req,res){
    loginController.createAdminUser(req,res)
})




// router.post('/editPartnerActive/:id',function(req,res){
//     adminController.editPartnerActive(req,res)
// })

module.exports= router;