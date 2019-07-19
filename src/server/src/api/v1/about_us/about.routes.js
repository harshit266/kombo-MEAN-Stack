const express = require('express')
const aboutController =require('./about.controller')

const router =express.Router();

router.post('/about-edit/:id',function(req,res){
    aboutController.aboutEdit(req,res)
})

router.get('/about',function(req,res){
    aboutController.about(req,res)
})




module.exports= router;