const express = require('express')
const cookiesController =require('./cookies.controller')

const router =express.Router();

router.post('/cookies-edit',function(req,res){
     console.log("cookies edit ")
    cookiesController.cookiesEdit(req,res)
})

router.get('/cookies',function(req,res){
    cookiesController.cookies(req,res)
})
// console.log("aaaaa")

module.exports = router;