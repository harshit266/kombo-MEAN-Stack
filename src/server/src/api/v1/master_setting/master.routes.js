const express = require('express')
const masterController =require('./master.controller')

const router =express.Router();

router.post('/addCategory',function(req,res){
    masterController.addCategory(req,res)
})
router.get('/viewCategory',function(req,res){
    masterController.viewCategory(req,res)
})
router.get('/viewPerCategory/:id',function(req,res){
    masterController.viewPerCategory(req,res)
})
router.post('/editActiveCategory/:id',function(req,res){
    masterController.editActiveCategory(req,res)
})
router.post('/editCategory/:id',function(req,res){
    masterController.editCategory(req,res)
})


module.exports= router;